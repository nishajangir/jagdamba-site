//+------------------------------------------------------------------+
//|                                              BTC_Arb_MT4.mq4    |
//|                         Gold/BTC Arbitrage EA - MT4 Side        |
//|                                                                  |
//|  LOGIC:                                                          |
//|  - Monitors THIS account for any new manual trade               |
//|  - Sends signal to MT5 via Named Pipe                           |
//|  - Receives signal from MT5 and executes OPPOSITE trade here    |
//|  - Dashboard shows: Spot Price | MT5 Price | Premium | P&L      |
//+------------------------------------------------------------------+
#property copyright "Arbitrage EA"
#property version   "1.00"
#property strict

//--- Inputs
input string   Symbol_MT4       = "BTCUSD";     // MT4 Symbol Name
input string   Symbol_MT5       = "BTCUSD";     // MT5 Symbol (for reference)
input double   Slippage         = 3;            // Max Slippage (points)
input int      MagicNumber      = 20240101;     // Magic Number
input bool     Send_Mode        = true;         // true=Send signals, false=Receive only
input bool     Receive_Mode     = true;         // true=Execute received signals
input color    Dashboard_Color  = clrNavy;      // Dashboard background
input int      Dashboard_X      = 20;           // Dashboard X position
input int      Dashboard_Y      = 30;           // Dashboard Y position

//--- Named Pipe settings
#define PIPE_NAME_MT4_TO_MT5  "\\\\.\\pipe\\ArbitrageM4toM5"
#define PIPE_NAME_MT5_TO_MT4  "\\\\.\\pipe\\ArbitrageM5toM4"

//--- Global vars
int      g_lastTicket    = 0;
int      g_pipe_send     = INVALID_HANDLE;
int      g_pipe_recv     = INVALID_HANDLE;
datetime g_lastCheck     = 0;
string   g_lastSignal    = "";
bool     g_pipeConnected = false;
double   g_mt5Price      = 0;
double   g_premium       = 0;
double   g_totalPnL      = 0;

//--- Dashboard label names
string LBL_TITLE    = "ARB_TITLE";
string LBL_MT4P     = "ARB_MT4PRICE";
string LBL_MT5P     = "ARB_MT5PRICE";
string LBL_PREMIUM  = "ARB_PREMIUM";
string LBL_PNL      = "ARB_PNL";
string LBL_STATUS   = "ARB_STATUS";
string LBL_SPREAD   = "ARB_SPREAD";
string LBL_SIGNAL   = "ARB_SIGNAL";
string LBL_BG       = "ARB_BG";

//+------------------------------------------------------------------+
int OnInit()
{
   Print("BTC Arbitrage MT4 EA Started");
   CreateDashboard();

   // Try connecting to pipes
   ConnectPipes();

   EventSetMillisecondTimer(50); // Check every 50ms for near-zero latency
   return(INIT_SUCCEEDED);
}

//+------------------------------------------------------------------+
void OnDeinit(const int reason)
{
   EventKillTimer();
   ClosePipes();
   DeleteDashboard();
   Print("BTC Arbitrage MT4 EA Stopped");
}

//+------------------------------------------------------------------+
void OnTick()
{
   // Update dashboard prices
   UpdateDashboard();

   // Check for new manual trades on THIS account
   if(Send_Mode)
      CheckAndSendNewTrades();

   // Check for incoming signals from MT5
   if(Receive_Mode)
      CheckAndReceiveSignals();
}

//+------------------------------------------------------------------+
void OnTimer()
{
   // High frequency check via timer (50ms)
   if(!g_pipeConnected)
      ConnectPipes();

   UpdateDashboard();         // Keep premium fresh even between ticks
   if(Receive_Mode)
      CheckAndReceiveSignals();
}

//+------------------------------------------------------------------+
// PIPE CONNECTION
//+------------------------------------------------------------------+
void ConnectPipes()
{
   // Try to open send pipe (MT4 → MT5)
   if(g_pipe_send == INVALID_HANDLE)
   {
      g_pipe_send = FileOpen("\\\\.\\pipe\\ArbitrageM4toM5", FILE_WRITE|FILE_BIN|FILE_COMMON);
      if(g_pipe_send != INVALID_HANDLE)
         Print("Send pipe connected (MT4→MT5)");
   }

   // Try to open receive pipe (MT5 → MT4)
   if(g_pipe_recv == INVALID_HANDLE)
   {
      g_pipe_recv = FileOpen("\\\\.\\pipe\\ArbitrageM5toM4", FILE_READ|FILE_BIN|FILE_COMMON);
      if(g_pipe_recv != INVALID_HANDLE)
         Print("Receive pipe connected (MT5→MT4)");
   }

   g_pipeConnected = (g_pipe_send != INVALID_HANDLE || g_pipe_recv != INVALID_HANDLE);

   // Fallback: Use shared file if pipe not available
   UpdateStatusLabel(g_pipeConnected ? "PIPE CONNECTED" : "FILE MODE (No Pipe)");
}

//+------------------------------------------------------------------+
void ClosePipes()
{
   if(g_pipe_send != INVALID_HANDLE) { FileClose(g_pipe_send); g_pipe_send = INVALID_HANDLE; }
   if(g_pipe_recv != INVALID_HANDLE) { FileClose(g_pipe_recv); g_pipe_recv = INVALID_HANDLE; }
}

//+------------------------------------------------------------------+
// SIGNAL SENDING - Detects new trades on this account
//+------------------------------------------------------------------+
void CheckAndSendNewTrades()
{
   for(int i = OrdersTotal() - 1; i >= 0; i--)
   {
      if(!OrderSelect(i, SELECT_BY_POS, MODE_TRADES)) continue;
      if(OrderSymbol() != Symbol_MT4) continue;
      if(OrderMagicNumber() == MagicNumber) continue; // Skip EA trades

      int ticket = OrderTicket();
      if(ticket == g_lastTicket) continue; // Already processed

      // NEW manual trade detected!
      g_lastTicket = ticket;

      string cmd    = (OrderType() == OP_BUY) ? "BUY" : "SELL";
      double lots   = OrderLots();
      double price  = OrderOpenPrice();

      string signal = StringFormat("TRADE|%s|%.2f|%.5f|%d", cmd, lots, price, ticket);

      Print("New manual trade detected: ", signal);
      SendSignal(signal);

      // Update dashboard
      UpdateSignalLabel("Sent: " + cmd + " " + DoubleToStr(lots, 2) + " lots");
   }
}

//+------------------------------------------------------------------+
// SIGNAL RECEIVING & EXECUTION
//+------------------------------------------------------------------+
void CheckAndReceiveSignals()
{
   string signal = ReceiveSignal();
   if(signal == "" || signal == g_lastSignal) return;

   g_lastSignal = signal;
   Print("Signal received from MT5: ", signal);

   // Parse signal: TRADE|BUY|0.01|price|ticket  OR  PRICE|xxxxx
   string parts[];
   int cnt = StringSplit(signal, '|', parts);
   if(cnt < 2) return;

   if(parts[0] == "TRADE" && cnt >= 4)
   {
      string cmd   = parts[1];
      double lots  = StringToDouble(parts[2]);

      // Execute OPPOSITE trade
      int oppCmd = (cmd == "BUY") ? OP_SELL : OP_BUY;
      double oppPrice = (oppCmd == OP_BUY) ? MarketInfo(Symbol_MT4, MODE_ASK)
                                            : MarketInfo(Symbol_MT4, MODE_BID);

      int ticket = OrderSend(
         Symbol_MT4, oppCmd, lots, oppPrice, (int)Slippage,
         0, 0,
         "ARB-" + cmd, MagicNumber, 0,
         (oppCmd == OP_BUY) ? clrBlue : clrRed
      );

      if(ticket > 0)
      {
         Print("Opposite trade executed! Ticket: ", ticket, " | ", (oppCmd==OP_BUY?"BUY":"SELL"), " ", lots, " lots");
         UpdateSignalLabel("Recv+Exec: " + (oppCmd==OP_BUY?"BUY":"SELL") + " " + DoubleToStr(lots,2));
      }
      else
         Print("Trade execution FAILED! Error: ", GetLastError());
   }
   else if(parts[0] == "PRICE" && cnt >= 2)
   {
      // MT5 sending its price for premium calculation
      g_mt5Price = StringToDouble(parts[1]);
      double mt4Price = (MarketInfo(Symbol_MT4, MODE_ASK) + MarketInfo(Symbol_MT4, MODE_BID)) / 2;
      g_premium = g_mt5Price - mt4Price;
   }
}

//+------------------------------------------------------------------+
// SEND SIGNAL via Shared File (reliable fallback for Named Pipe)
//+------------------------------------------------------------------+
void SendSignal(string signal)
{
   // Method 1: Try pipe first
   if(g_pipe_send != INVALID_HANDLE)
   {
      uchar buf[];
      StringToCharArray(signal, buf);
      if(FileWriteArray(g_pipe_send, buf) > 0)
      {
         FileFlush(g_pipe_send);
         return;
      }
   }

   // Method 2: Shared file (fallback)
   string filename = "arb_signal_m4tom5.txt";
   int fh = FileOpen(filename, FILE_WRITE|FILE_TXT|FILE_COMMON);
   if(fh != INVALID_HANDLE)
   {
      FileWriteString(fh, signal + "|" + IntegerToString(GetTickCount()));
      FileClose(fh);
   }
}

//+------------------------------------------------------------------+
string ReceiveSignal()
{
   // Method 1: Try pipe
   if(g_pipe_recv != INVALID_HANDLE && !FileIsEnding(g_pipe_recv))
   {
      uchar buf[];
      uint bytes = FileReadArray(g_pipe_recv, buf, 0, 256);
      if(bytes > 0)
         return CharArrayToString(buf, 0, bytes);
   }

   // Method 2: Shared file (fallback)
   string filename = "arb_signal_m5tom4.txt";
   if(!FileIsExist(filename, FILE_COMMON)) return "";

   int fh = FileOpen(filename, FILE_READ|FILE_TXT|FILE_COMMON);
   if(fh == INVALID_HANDLE) return "";

   string content = FileReadString(fh, 1000);
   FileClose(fh);

   // Delete after reading to avoid re-processing
   if(content != "" && content != g_lastSignal)
   {
      FileDelete(filename, FILE_COMMON);
      return content;
   }
   return "";
}

//+------------------------------------------------------------------+
// DASHBOARD
//+------------------------------------------------------------------+
void CreateDashboard()
{
   int w = 320, h = 220;
   int x = Dashboard_X, y = Dashboard_Y;

   // Background
   ObjectCreate(0, LBL_BG, OBJ_RECTANGLE_LABEL, 0, 0, 0);
   ObjectSetInteger(0, LBL_BG, OBJPROP_XDISTANCE, x);
   ObjectSetInteger(0, LBL_BG, OBJPROP_YDISTANCE, y);
   ObjectSetInteger(0, LBL_BG, OBJPROP_XSIZE, w);
   ObjectSetInteger(0, LBL_BG, OBJPROP_YSIZE, h);
   ObjectSetInteger(0, LBL_BG, OBJPROP_BGCOLOR, Dashboard_Color);
   ObjectSetInteger(0, LBL_BG, OBJPROP_BORDER_TYPE, BORDER_FLAT);
   ObjectSetInteger(0, LBL_BG, OBJPROP_COLOR, clrGold);
   ObjectSetInteger(0, LBL_BG, OBJPROP_WIDTH, 2);
   ObjectSetInteger(0, LBL_BG, OBJPROP_BACK, false);

   CreateLabel(LBL_TITLE,   "⚡ BTC ARBITRAGE EA [MT4-SPOT]",  x+10, y+10,  clrGold,    10, true);
   CreateLabel(LBL_MT4P,    "MT4 Price : ---",                  x+10, y+45,  clrWhite,   9,  false);
   CreateLabel(LBL_MT5P,    "MT5 Price : ---",                  x+10, y+70,  clrCyan,    9,  false);
   CreateLabel(LBL_PREMIUM, "Premium   : ---",                  x+10, y+95,  clrYellow,  9,  false);
   CreateLabel(LBL_SPREAD,  "Spread    : ---",                  x+10, y+120, clrWhite,   9,  false);
   CreateLabel(LBL_PNL,     "Total P&L : ---",                  x+10, y+150, clrLime,    10, true);
   CreateLabel(LBL_SIGNAL,  "Last Signal: ---",                 x+10, y+175, clrOrange,  8,  false);
   CreateLabel(LBL_STATUS,  "Status: Initializing...",          x+10, y+198, clrGray,    8,  false);

   ChartRedraw(0);
}

//+------------------------------------------------------------------+
void CreateLabel(string name, string text, int x, int y, color clr, int size, bool bold)
{
   ObjectCreate(0, name, OBJ_LABEL, 0, 0, 0);
   ObjectSetInteger(0, name, OBJPROP_XDISTANCE,  x);
   ObjectSetInteger(0, name, OBJPROP_YDISTANCE,  y);
   ObjectSetString(0,  name, OBJPROP_TEXT,        text);
   ObjectSetInteger(0, name, OBJPROP_COLOR,       clr);
   ObjectSetInteger(0, name, OBJPROP_FONTSIZE,    size);
   ObjectSetString(0,  name, OBJPROP_FONT,        bold ? "Arial Bold" : "Arial");
   ObjectSetInteger(0, name, OBJPROP_CORNER,      CORNER_LEFT_UPPER);
   ObjectSetInteger(0, name, OBJPROP_BACK,        false);
}

//+------------------------------------------------------------------+
void UpdateDashboard()
{
   double ask  = MarketInfo(Symbol_MT4, MODE_ASK);
   double bid  = MarketInfo(Symbol_MT4, MODE_BID);
   double mid  = (ask + bid) / 2;
   double sprd = (ask - bid);

   // --- Write MT4 price to GlobalVariable (RAM) so MT5 can read it ---
   GlobalVariableSet("ARB_MT4_ASK",  ask);
   GlobalVariableSet("ARB_MT4_BID",  bid);
   GlobalVariableSet("ARB_MT4_MID",  mid);
   GlobalVariableSet("ARB_MT4_TIME", (double)GetTickCount());

   // --- Read MT5 price from GlobalVariable (RAM - microsecond read) ---
   if(GlobalVariableCheck("ARB_MT5_MID"))
      g_mt5Price = GlobalVariableGet("ARB_MT5_MID");

   // Premium = MT5(Future) - MT4(Spot)
   if(g_mt5Price > 0)
      g_premium = g_mt5Price - mid;

   // Staleness check: if MT5 data >5 seconds old, show warning
   bool mt5Fresh = false;
   if(GlobalVariableCheck("ARB_MT5_TIME"))
   {
      double mt5Time = GlobalVariableGet("ARB_MT5_TIME");
      mt5Fresh = ((GetTickCount() - (uint)mt5Time) < 5000);
   }

   // Calculate total P&L of all ARB trades
   g_totalPnL = 0;
   for(int i = 0; i < OrdersTotal(); i++)
   {
      if(!OrderSelect(i, SELECT_BY_POS, MODE_TRADES)) continue;
      if(OrderMagicNumber() == MagicNumber)
         g_totalPnL += OrderProfit() + OrderSwap() + OrderCommission();
   }

   color pnlColor  = (g_totalPnL >= 0) ? clrLime    : clrRed;
   color premColor = (g_premium  >= 0) ? clrYellow  : clrOrange;

   string mt5Str  = mt5Fresh ? DoubleToStr(g_mt5Price, 2) : "MT5 Offline!";
   string premStr = mt5Fresh ? DoubleToStr(g_premium,  2) : "---";
   color  mt5Col  = mt5Fresh ? clrCyan : clrRed;

   ObjectSetString(0,  LBL_MT4P,    OBJPROP_TEXT,  "MT4 Spot  : " + DoubleToStr(mid, 2));
   ObjectSetString(0,  LBL_MT5P,    OBJPROP_TEXT,  "MT5 Future: " + mt5Str);
   ObjectSetString(0,  LBL_PREMIUM, OBJPROP_TEXT,  "Premium   : " + premStr);
   ObjectSetString(0,  LBL_SPREAD,  OBJPROP_TEXT,  "Spread    : " + DoubleToStr(sprd, 5));
   ObjectSetString(0,  LBL_PNL,     OBJPROP_TEXT,  "Total P&L : " + DoubleToStr(g_totalPnL, 2) + " USD");

   ObjectSetInteger(0, LBL_MT5P,    OBJPROP_COLOR, mt5Col);
   ObjectSetInteger(0, LBL_PNL,     OBJPROP_COLOR, pnlColor);
   ObjectSetInteger(0, LBL_PREMIUM, OBJPROP_COLOR, premColor);

   ChartRedraw(0);
}

//+------------------------------------------------------------------+
void UpdateSignalLabel(string text)
{
   ObjectSetString(0, LBL_SIGNAL, OBJPROP_TEXT, "Signal: " + text + " [" + TimeToStr(TimeCurrent(), TIME_SECONDS) + "]");
   ChartRedraw(0);
}

void UpdateStatusLabel(string text)
{
   ObjectSetString(0, LBL_STATUS, OBJPROP_TEXT, "Status: " + text);
   ChartRedraw(0);
}

//+------------------------------------------------------------------+
void DeleteDashboard()
{
   string labels[] = {LBL_BG, LBL_TITLE, LBL_MT4P, LBL_MT5P, LBL_PREMIUM, LBL_SPREAD, LBL_PNL, LBL_SIGNAL, LBL_STATUS};
   for(int i = 0; i < ArraySize(labels); i++)
      ObjectDelete(0, labels[i]);
   ChartRedraw(0);
}
//+------------------------------------------------------------------+
