"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"
import { Phone, MessageCircle, MapPin, Clock, Users, Wrench, Factory, Award, Globe, Camera } from "lucide-react"

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "hi">("en")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        gallery: "Gallery",
        contact: "Contact",
      },
      hero: {
        title: "Industrial Crusher Manufacturing & Repair Experts - 30+ Years of Trust",
        subtitle: "Rajasthan's trusted partner for crusher manufacturing, repair, and heavy machining services serving mining, construction, and cement industries",
        cta1: "Call Now",
        cta2: "WhatsApp Message",
        cta3: "Free Quote",
      },
      stats: {
        experience: "30+ Years Excellence",
        workshops: "2 State-of-the-Art Workshops",
        machines: "15+ Heavy Lathe Machines",
        clients: "500+ Industry Clients",
      },
      services: {
        title: "Complete Industrial Solutions",
        subtitle: "Comprehensive crusher manufacturing, repair, and machining services for mining, construction, and cement industries",
        manufacturing: {
          title: "New Crusher Manufacturing",
          desc: "Jaw crushers, cone crushers, impact crushers with precision engineering and high-grade steel construction for optimal performance",
        },
        repair: {
          title: "Expert Crusher Parts Repair",
          desc: "Specialized repair and replacement of jaw plates, mantles, concaves, blow bars, and all crusher components with quality assurance",
        },
        machining: {
          title: "Heavy Lathe & Machining Services",
          desc: "Precision machining with 15+ modern lathe machines for components of all industrial sizes with tight tolerances",
        },
        welding: {
          title: "Advanced Welding & Hardfacing",
          desc: "Specialized welding with manganese, MS, and hard alloy hardfacing for extended component life and durability",
        },
      },
      about: {
        title: "About Jagdamba Engineering Works - Industry's Trusted Name",
        desc: "Established in 1990, Jagdamba Engineering Works is a trusted name in industrial crusher manufacturing and heavy machining services across Rajasthan. With 30+ years of expertise and state-of-the-art facilities in Neem Ka Thana (Sikar) and Jaipur, we serve mining, construction, cement, and aggregate industries. Our experienced engineering and technical team ensures highest quality standards and timely delivery for all industrial projects.",
        facilities: "Modern Facilities & Equipment",
        locations: "Two Strategic Industrial Locations",
      },
      gallery: {
        title: "Our Industrial Work Gallery",
        subtitle: "See our expertise in action - from crusher manufacturing to specialized repair work",
        categories: {
          workshop: "Workshop Facilities",
          manufacturing: "Manufacturing Process",
          repair: "Repair Work",
          machines: "Machines & Equipment",
        },
      },
      contact: {
        title: "Contact Us Today",
        subtitle: "Reach out for crusher manufacturing, repair, and heavy machining services across Rajasthan",
        phone: "+91-97840640136",
        email: "jagdambaengg@gmail.com",
        locations: {
          patan: "Patan Workshop - Neem Ka Thana, Sikar, Rajasthan 332042",
          jaipur: "Jaipur Workshop - Chandwaji, Jaipur, Rajasthan 303706",
        },
        form: {
          name: "Your Name",
          phone: "Phone Number",
          requirement: "Your Requirement",
          upload: "Upload Crusher Part Photo (Optional)",
          send: "Send Enquiry",
        },
      },
    },
    hi: {
      nav: {
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएं",
        gallery: "गैलरी",
        contact: "संपर्क",
      },
      hero: {
        title: "औद्योगिक क्रशर निर्माण & मरम्मत विशेषज्ञ - 30+ वर्षों का विश्वास",
        subtitle: "राजस्थान में क्रशर निर्माण, मरम्मत, और भारी मशीनिंग सेवाओं के लिए आपका विश्वसनीय साथी",
        cta1: "तुरंत कॉल करें",
        cta2: "व्हाट्सऐप संदेश",
        cta3: "मुफ्त कोटेशन",
      },
      stats: {
        experience: "30+ साल का अनुभव",
        workshops: "2 अत्याधुनिक वर्कशॉप",
        machines: "15+ भारी लेथ मशीनें",
        clients: "500+ संतुष्ट उद्योग ग्राहक",
      },
      services: {
        title: "हमारी व्यापक सेवाएं",
        subtitle: "खनन, निर्माण और उद्योग के लिए संपूर्ण क्रशर समाधान",
        manufacturing: {
          title: "नया क्रशर निर्माण",
          desc: "जॉ क्रशर, कोन क्रशर, इम्पैक्ट क्रशर - प्रिसीजन इंजीनियरिंग और उच्च गुणवत्ता वाली स्टील के साथ",
        },
        repair: {
          title: "क्रशर पार्ट्स की विशेष मरम्मत",
          desc: "जॉ प्लेट्स, मेंटल्स, कॉन्केव्स, ब्लो बार्स - सभी घटकों की विशेषज्ञ मरम्मत और प्रतिस्थापन सेवा",
        },
        machining: {
          title: "भारी लेथ और मशीनिंग सेवाएं",
          desc: "15+ आधुनिक लेथ मशीनों के साथ सटीक मशीनिंग - सभी औद्योगिक आकार के पार्ट्स के लिए",
        },
        welding: {
          title: "उन्नत वेल्डिंग और हार्डफेसिंग",
          desc: "मैंगनीज, एमएस, हार्ड अलॉय - घटकों की लंबी उम्र के लिए विशेष वेल्डिंग तकनीकें",
        },
      },
      about: {
        title: "जगदम्बा इंजीनियरिंग वर्क्स - औद्योगिक विश्वास का प्रतीक",
        desc: "1990 में स्थापित, हम राजस्थान में औद्योगिक क्रशर और भारी मशीनिंग का विश्वसनीय नाम हैं। नीम का थाना (सीकर) और जयपुर में हमारी आधुनिक वर्कशॉपें खनन, निर्माण, सीमेंट और कुल उद्योगों की सेवा करती हैं। हमारे अनुभवी इंजीनियर और तकनीशियन दल उच्चतम गुणवत्ता और समय पर डिलीवरी सुनिश्चित करते हैं।",
        facilities: "अत्याधुनिक सुविधाएं और उपकरण",
        locations: "दो रणनीतिक औद्योगिक स्थान",
      },
      gallery: {
        title: "हमारी औद्योगिक कार्य गैलरी",
        subtitle: "क्रशर निर्माण से लेकर मरम्मत तक - हमारी विशेषज्ञता को देखें",
        categories: {
          workshop: "वर्कशॉप की सुविधाएं",
          manufacturing: "निर्माण प्रक्रिया",
          repair: "मरम्मत कार्य",
          machines: "मशीनें और उपकरण",
        },
      },
      contact: {
        title: "अभी हमसे संपर्क करें",
        subtitle: "क्रशर निर्माण, मरम्मत, और मशीनिंग सेवाओं के लिए तुरंत संपर्क करें",
        phone: "+91-97840640136",
        email: "jagdambaengg@gmail.com",
        locations: {
          patan: "पाटन वर्कशॉप - नीम का थाना, सीकर, राजस्थान 332042",
          jaipur: "जयपुर वर्कशॉप - चांदवाजी, जयपुर, राजस्थान 303706",
        },
        form: {
          name: "आपका नाम",
          phone: "फोन नंबर",
          requirement: "आपकी आवश्यकता",
          upload: "क्रशर पार्ट की फोटो अपलोड करें (वैकल्पिक)",
          send: "पूछताछ भेजें",
        },
      },
    },
  }

  const t = content[language]

  return (
    <>
      <style>{`
        .light-blur {
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(1px);
          -webkit-backdrop-filter: blur(0.5px);
        }
        .dark .light-blur {
          background: rgba(0, 0, 0, 0.50);
          backdrop-filter: blur(1px);
          -webkit-backdrop-filter: blur(0.5px);
        }
      `}</style>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: 'url(/industrial-crusher-machine-manufacturing-workshop-.png)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="light-blur absolute inset-0 pointer-events-none" style={{ position: 'fixed', zIndex: 0 }} />
        <div className="relative z-10">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur border-b border-border">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-primary">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div>
                    <h1 className="font-heading font-bold text-lg text-foreground">Jagdamba Engg.</h1>
                    <p className="text-xs text-muted-foreground">Since 1990</p>
                  </div>
                </div>

                <nav className="hidden md:flex items-center gap-4">
                  {[
                    { id: "home", label: t.nav.home },
                    { id: "about", label: t.nav.about },
                    { id: "services", label: t.nav.services },
                    { id: "gallery", label: t.nav.gallery },
                    { id: "contact", label: t.nav.contact },
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection(item.id)}
                      className="text-foreground hover:bg-transparent hover:text-primary"
                    >
                      {item.label}
                    </Button>
                  ))}
                </nav>

                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                    className="gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{language === "en" ? "हिंदी" : "English"}</span>
                  </Button>
                  <ThemeToggle />
                  <Button asChild size="sm" className="hidden sm:inline-flex">
                    <a href="tel:+919784064136">
                      <Phone className="h-4 w-4" />
                      <span>{t.contact.phone}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section
            id="home"
            className="py-24 relative overflow-hidden scroll-mt-20 bg-white/80 dark:bg-black/80"
          >
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-background text-foreground border border-border px-3 py-1 text-xs">
                  <Award className="h-3 w-3 mr-2" />
                  Trusted Since 1990
                </Badge>

                <h1 className="font-heading font-bold text-3xl lg:text-5xl text-balance mb-6 text-foreground leading-tight">
                  {t.hero.title}
                </h1>

                <p className="text-base text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
                  {t.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="h-10 px-6 text-sm border border-primary">
                    <a href="tel:+919784064136">
                      <Phone className="h-4 w-4" />
                      {t.hero.cta1}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="h-10 px-6 text-sm border border-primary bg-white text-primary hover:bg-primary/5 dark:bg-background dark:text-primary dark:hover:bg-primary/10"
                  >
                    <a
                      href="https://wa.me/919784064136?text=Hi%20Jagdamba%20Engg.%20Works,%20I%20need%20crusher%20manufacturing%20and%20repair%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t.hero.cta2}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 bg-white/80 dark:bg-black/80">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 bg-secondary border border-border rounded-sm flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-1">30+</h3>
                  <p className="text-muted-foreground text-sm">{t.stats.experience}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 bg-secondary border border-border rounded-sm flex items-center justify-center">
                      <Factory className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-1">2</h3>
                  <p className="text-muted-foreground text-sm">{t.stats.workshops}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 bg-secondary border border-border rounded-sm flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-1">15</h3>
                  <p className="text-muted-foreground text-sm">{t.stats.machines}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 bg-secondary border border-border rounded-sm flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-1">500+</h3>
                  <p className="text-muted-foreground text-sm">{t.stats.clients}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 bg-white/80 dark:bg-black/80 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance mb-6 text-foreground">
                  {t.services.title}
                </h2>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  {t.services.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <Card className="group border border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="h-14 w-14 bg-orange-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                      <Factory className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="font-heading font-bold text-base">{t.services.manufacturing.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-sm">{t.services.manufacturing.desc}</CardDescription>
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">Jaw • Cone • Impact • Roll • Hammer Crushers</p>
                  </CardContent>
                </Card>

                <Card className="group border border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="h-14 w-14 bg-orange-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                      <Wrench className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="font-heading font-bold text-base">{t.services.repair.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-sm">{t.services.repair.desc}</CardDescription>
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">Quick Turnaround • Quality Assurance • Tested Parts</p>
                  </CardContent>
                </Card>

                <Card className="group border border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="h-14 w-14 bg-orange-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="font-heading font-bold text-base">{t.services.machining.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-sm">{t.services.machining.desc}</CardDescription>
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">Turning • Boring • Milling • Threading • Facing</p>
                  </CardContent>
                </Card>

                <Card className="group border border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="pb-4">
                    <div className="h-14 w-14 bg-orange-100 rounded-sm flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                      <Award className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="font-heading font-bold text-base">{t.services.welding.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-sm">{t.services.welding.desc}</CardDescription>
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">Manganese • MS • Hard Alloy • Certified Welders</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-white/80 dark:bg-black/80 relative overflow-hidden scroll-mt-20">
            <div className="absolute inset-0 opacity-5">
            </div>
            <div className="container mx-auto px-4 relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <div>
                  <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-6 text-foreground leading-tight">
                    {t.about.title}
                  </h2>
                  <p className="text-base text-muted-foreground mb-8 text-pretty leading-relaxed">{t.about.desc}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-foreground font-bold text-sm block">{t.about.facilities}</span>
                        <span className="text-muted-foreground text-xs">High-speed lathe machines, welding stations, precision measuring instruments</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-foreground font-bold text-sm block">{t.about.locations}</span>
                        <span className="text-muted-foreground text-xs">Neem Ka Thana (Sikar) & Jaipur for faster delivery and service</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-foreground font-bold text-sm block">Industry Experience</span>
                        <span className="text-muted-foreground text-xs">Mining, construction, cement, aggregates, and bulk material handling industries</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-foreground font-bold text-sm block">Quality Assurance</span>
                        <span className="text-muted-foreground text-xs">All parts tested and certified before delivery with warranty</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/industrial-workshop-with-lathe-machines-and-weldin.png"
                    alt="Jagdamba Engineering Workshop"
                    className="rounded-sm w-full border border-border"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-24 bg-white/80 dark:bg-black/80 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance mb-6 text-foreground">
                  {t.gallery.title}
                </h2>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  {t.gallery.subtitle}
                </p>
              </div>

              {/* Gallery Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 justify-center py-4 border border-border text-foreground hover:border-primary bg-white dark:bg-background dark:text-foreground dark:hover:border-primary"
                >
                  <Factory className="h-4 w-4" />
                  <span>{t.gallery.categories.workshop}</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 justify-center py-4 border border-border text-foreground hover:border-primary bg-white dark:bg-background dark:text-foreground dark:hover:border-primary"
                >
                  <Wrench className="h-4 w-4" />
                  <span>{t.gallery.categories.manufacturing}</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 justify-center py-4 border border-border text-foreground hover:border-primary bg-white dark:bg-background dark:text-foreground dark:hover:border-primary"
                >
                  <Award className="h-4 w-4" />
                  <span>{t.gallery.categories.repair}</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 justify-center py-4 border border-border text-foreground hover:border-primary bg-white dark:bg-background dark:text-foreground dark:hover:border-primary"
                >
                  <Users className="h-4 w-4" />
                  <span>{t.gallery.categories.machines}</span>
                </Button>
              </div>

              {/* Gallery Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Large Lathe Machine with Marigold Garland */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01136.JPG-awFqDyNo6XV7zfxEtxKBjWOWEhfKOv.jpeg"
                    alt="Large Lathe Machine with Marigold Garland"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Heavy Lathe Machine</h3>
                      <p className="text-xs opacity-90">Precision Manufacturing</p>
                    </div>
                  </div>
                </div>

                {/* Workshop Interior Overview */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01146.JPG-HuuHqENtolEabRm8GbRpcJJdRoTeCf.jpeg"
                    alt="Workshop Interior with High Ceiling"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Workshop Interior</h3>
                      <p className="text-xs opacity-90">Spacious Manufacturing Facility</p>
                    </div>
                  </div>
                </div>

                {/* Red Drilling Machine */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01144.JPG-g2dkY5xb86L3DwTv1jrKMcsdNpDRV4.jpeg"
                    alt="Red Drilling Machine and Workshop Equipment"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Drilling Equipment</h3>
                      <p className="text-xs opacity-90">Precision Drilling Operations</p>
                    </div>
                  </div>
                </div>

                {/* Band Saw Machines */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01143.JPG-WLHDX2Er1Th7HhBJh4yzzwUb93VPzL.jpeg"
                    alt="Band Saw Machines for Metal Cutting"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Band Saw Machines</h3>
                      <p className="text-xs opacity-90">Metal Cutting Operations</p>
                    </div>
                  </div>
                </div>

                {/* Precision Milling Machine */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01139.JPG-ZMG1TxlYGrgJk8SrJMGiP9mfKlmx19.jpeg"
                    alt="Precision Milling and Drilling Machine"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Milling Machine</h3>
                      <p className="text-xs opacity-90">Precision Component Manufacturing</p>
                    </div>
                  </div>
                </div>

                {/* Large Lathe with Belt Drive */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01142.JPG-q9n0EJPsHlwWVlGecsl5YDr0vXkqEa.jpeg"
                    alt="Large Lathe Machine with Belt Drive System"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Belt Drive Lathe</h3>
                      <p className="text-xs opacity-90">Heavy Duty Machining</p>
                    </div>
                  </div>
                </div>

                {/* Yellow Hydraulic Press */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01145.JPG-INC5p8lbRVpLr0E3nucRFY2oztXJIn.jpeg"
                    alt="Yellow Hydraulic Press Machine"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Hydraulic Press</h3>
                      <p className="text-xs opacity-90">Heavy Duty Pressing Operations</p>
                    </div>
                  </div>
                </div>

                {/* Modern Lathe Machine */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01138.JPG-cd5j0Dn8xK2Ro51idH82UtTHhFyiXR.jpeg"
                    alt="Modern Lathe Machine with Orange Accents"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Modern Lathe</h3>
                      <p className="text-xs opacity-90">Advanced Machining Technology</p>
                    </div>
                  </div>
                </div>

                {/* Green Lathe Machine */}
                <div className="group relative overflow-hidden rounded-sm bg-secondary border border-border hover:border-primary/50 transition-colors duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01137.JPG-FzpP0RYmpfKuwmMABG1hGLpGFo8fAI.jpeg"
                    alt="Green Lathe Machine with Belt Drive"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-foreground">
                      <h3 className="font-heading font-bold text-base">Industrial Lathe</h3>
                      <p className="text-xs opacity-90">Crusher Component Manufacturing</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-white/80 dark:bg-black/80 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance mb-6 text-foreground">
                  {t.contact.title}
                </h2>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.contact.subtitle}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                <Card className="border border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="flex flex-col items-center space-y-4">
                      <div className="h-10 w-10 bg-secondary rounded-sm flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-2">Call Us</p>
                        <Button
                          asChild
                          variant="ghost"
                          className="h-auto p-0 font-heading text-base hover:bg-transparent hover:text-primary"
                        >
                          <a href="tel:+919784064136">{t.contact.phone}</a>
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="border border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="flex flex-col items-center space-y-4">
                      <div className="h-10 w-10 bg-secondary rounded-sm flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-2">WhatsApp</p>
                        <Button
                          asChild
                          variant="ghost"
                          className="h-auto p-0 font-heading text-base hover:bg-transparent hover:text-primary"
                        >
                          <a
                            href="https://wa.me/919784064136?text=Hi%20Jagdamba%20Engg.%20Works,%20I%20need%20crusher%20manufacturing%20and%20repair%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t.contact.phone}
                          </a>
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
                {/* Patan Workshop */}
                <Card className="overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-foreground text-base">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{t.contact.locations.patan}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.123456789!2d75.983632!3d27.794063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d30c8dc706b6f:0x57591602fbce4f17!2sJagdamba%20Engg.%20Works!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Patan Workshop Location"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>

                {/* Jaipur Workshop */}
                <Card className="overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-foreground text-base">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{t.contact.locations.jaipur}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789!2d75.9342662!3d27.2225256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d092d24fd5f19:0x91207740fbc15825!2sJagdamba%20engineering%20works!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Jaipur Workshop Location"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card className="border border-border">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="font-heading font-bold text-lg mb-2">Get Quote for Your Crusher Needs</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      Send us your requirements and photos of crusher parts for accurate quotation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="lead-name" className="text-sm">{t.contact.form.name}</Label>
                        <Input
                          id="lead-name"
                          name="name"
                          type="text"
                          required
                          placeholder={t.contact.form.name}
                          className="h-10 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lead-phone" className="text-sm">{t.contact.form.phone}</Label>
                        <Input
                          id="lead-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder={t.contact.form.phone}
                          className="h-10 text-sm"
                        />
                      </div>

                      <Button type="submit" className="w-full h-10 font-semibold text-sm" size="sm">
                        {t.contact.form.send}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white/80 dark:bg-black/80 py-12 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-primary">
                    <Factory className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground">Jagdamba Engg.</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">Crusher Manufacturing & Repair Experts Since 1990</p>
                <p className="text-xs text-muted-foreground">© 2026 Jagdamba Engg. Works. All rights reserved.</p>
              </div>
            </div>
          </footer>

          {/* Floating WhatsApp Button */}
          <Button
            asChild
            size="icon"
            className="fixed bottom-6 right-6 h-12 w-12 rounded-sm bg-green-600 hover:bg-green-700 text-white border border-green-700 transition-colors duration-300 z-50"
          >
            <a
              href="https://wa.me/919784064136?text=Hi%20Jagdamba%20Engg.%20Works,%20I%20need%20crusher%20part%20repair."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </>
  )
}
