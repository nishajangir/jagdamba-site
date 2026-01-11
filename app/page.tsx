"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
        title: "Crusher Manufacturing & Repair Experts Since 1990",
        subtitle: "Trusted name for crusher manufacturing and repair in Neem Ka Thana and Jaipur",
        cta1: "Call Now",
        cta2: "WhatsApp",
        cta3: "Get Quote",
      },
      stats: {
        experience: "30+ Years Experience",
        workshops: "2 Large Workshops",
        machines: "15 Lathe Machines",
        clients: "500+ Satisfied Clients",
      },
      services: {
        title: "Our Services",
        subtitle: "Complete crusher solutions for mining and construction industries",
        manufacturing: {
          title: "New Crusher Manufacturing",
          desc: "Jaw crusher, Cone crusher, Impact crusher manufacturing with precision engineering",
        },
        repair: {
          title: "Crusher Parts Repair",
          desc: "Expert repair of jaw plates, mantles, concaves, blow bars, and all crusher components",
        },
        machining: {
          title: "Heavy Lathe Machining",
          desc: "Precision machining services with 15 lathe machines for all industrial requirements",
        },
        welding: {
          title: "Welding & Hardfacing",
          desc: "Specialized welding with manganese, MS, and hard alloys for extended component life",
        },
      },
      about: {
        title: "About Jagdamba Engg. Works",
        desc: "Established in 1990, we are a trusted name in crusher manufacturing and repair services across Rajasthan. With over 30 years of experience and state-of-the-art facilities in Patan and Jaipur, we serve the mining, construction, and cement industries.",
        facilities: "Our Facilities",
        locations: "Two Strategic Locations",
      },
      gallery: {
        title: "Our Work Gallery",
        subtitle: "See our expertise in action - from manufacturing to repair",
        categories: {
          workshop: "Workshop & Facilities",
          manufacturing: "Manufacturing Process",
          repair: "Repair Work",
          machines: "Machines & Equipment",
        },
      },
      contact: {
        title: "Contact Us",
        subtitle: "Get in touch for all your crusher needs",
        phone: "+91-97840640136",
        email: "jagdambaengg@gmail.com",
        locations: {
          patan: "Patan Workshop - Neem Ka Thana, Sikar, Rajasthan",
          jaipur: "Jaipur Workshop - Chandwaji, Jaipur, Rajasthan",
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
        title: "क्रशर निर्माण और मरम्मत विशेषज्ञ 1990 से",
        subtitle: "नीम का थाना और जयपुर में क्रशर बनाने और मरम्मत का विश्वसनीय नाम",
        cta1: "अभी कॉल करें",
        cta2: "व्हाट्सऐप",
        cta3: "कोटेशन पाएं",
      },
      stats: {
        experience: "30+ साल का अनुभव",
        workshops: "2 बड़ी वर्कशॉप",
        machines: "15 लेथ मशीनें",
        clients: "500+ संतुष्ट ग्राहक",
      },
      services: {
        title: "हमारी सेवाएं",
        subtitle: "खनन और निर्माण उद्योगों के लिए संपूर्ण क्रशर समाधान",
        manufacturing: {
          title: "नया क्रशर निर्माण",
          desc: "जॉ क्रशर, कोन क्रशर, इम्पैक्ट क्रशर का सटीक इंजीनियरिंग के साथ निर्माण",
        },
        repair: {
          title: "क्रशर पार्ट्स मरम्मत",
          desc: "जॉ प्लेट्स, मेंटल्स, कॉन्केव्स, ब्लो बार्स और सभी क्रशर घटकों की विशेषज्ञ मरम्मत",
        },
        machining: {
          title: "हेवी लेथ मशीनिंग",
          desc: "सभी औद्योगिक आवश्यकताओं के लिए 15 लेथ मशीनों के साथ सटीक मशीनिंग सेवाएं",
        },
        welding: {
          title: "वेल्डिंग और हार्डफेसिंग",
          desc: "घटकों के विस्तारित जीवन के लिए मैंगनीज, एमएस और हार्ड अलॉय के साथ विशेष वेल्डिंग",
        },
      },
      about: {
        title: "जगदम्बा इंजी. वर्क्स के बारे में",
        desc: "1990 में स्थापित, हम राजस्थान भर में क्रशर निर्माण और मरम्मत सेवाओं में एक विश्वसनीय नाम हैं। 30 से अधिक वर्षों के अनुभव और पाटन और जयपुर में अत्याधुनिक सुविधाओं के साथ, हम खनन, निर्माण और सीमेंट उद्योगों की सेवा करते हैं।",
        facilities: "हमारी सुविधाएं",
        locations: "दो रणनीतिक स्थान",
      },
      gallery: {
        title: "हमारी कार्य गैलरी",
        subtitle: "निर्माण से मरम्मत तक - हमारी विशेषज्ञता को देखें",
        categories: {
          workshop: "वर्कशॉप और सुविधाएं",
          manufacturing: "निर्माण प्रक्रिया",
          repair: "मरम्मत कार्य",
          machines: "मशीनें और उपकरण",
        },
      },
      contact: {
        title: "संपर्क करें",
        subtitle: "अपनी सभी क्रशर आवश्यकताओं के लिए संपर्क करें",
        phone: "+91-97840640136",
        email: "jagdambaengg@gmail.com",
        locations: {
          patan: "पाटन वर्कशॉप - नीम का थाना, सीकर, राजस्थान",
          jaipur: "जयपुर वर्कशॉप - चांदवाजी, जयपुर, राजस्थान",
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/jagdamba-logo.png" alt="Jagdamba Engg. Works Logo" className="h-10 w-10" />
              <div>
                <h1 className="font-heading font-bold text-xl text-primary">Jagdamba Engg. Works</h1>
                <p className="text-xs text-muted-foreground">Since 1990</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
              >
                {t.nav.gallery}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors cursor-pointer font-medium"
              >
                {t.nav.contact}
              </button>
            </nav>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                className="flex items-center space-x-2"
              >
                <Globe className="h-4 w-4" />
                <span>{language === "en" ? "हिंदी" : "English"}</span>
              </Button>
              <ThemeToggle />
              <a
                href="tel:+919784064136"
                className="hidden sm:inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>{t.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-24 lg:py-32 relative overflow-hidden bg-background scroll-mt-20">
        <div className="absolute inset-0">
          <img
            src="/industrial-crusher-machine-manufacturing-workshop-.png"
            alt="Industrial Workshop Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-card/80 to-secondary/90"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 bg-primary/20 text-primary border-primary/30 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Trusted Since 1990
            </Badge>

            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-balance mb-8 text-foreground leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919784064136"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="h-5 w-5 mr-2" />
                {t.hero.cta1}
              </a>
              <a
                href="https://wa.me/919784064136?text=Hi%20Jagdamba%20Engg.%20Works,%20I%20need%20crusher%20manufacturing%20and%20repair%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg bg-transparent border border-border text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-2">30+</h3>
              <p className="text-muted-foreground">{t.stats.experience}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-2">2</h3>
              <p className="text-muted-foreground">{t.stats.workshops}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-2">15</h3>
              <p className="text-muted-foreground">{t.stats.machines}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">{t.stats.clients}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance mb-6 text-foreground">
              {t.services.title}
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Factory className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-lg">{t.services.manufacturing.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{t.services.manufacturing.desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Wrench className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-lg">{t.services.repair.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{t.services.repair.desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-lg">{t.services.machining.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{t.services.machining.desc}</CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-heading font-bold text-lg">{t.services.welding.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{t.services.welding.desc}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/industrial-workshop-with-lathe-machines-and-weldin.png"
            alt="Workshop Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance mb-8 text-foreground leading-tight">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed">{t.about.desc}</p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{t.about.facilities}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-3 w-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{t.about.locations}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/industrial-workshop-with-lathe-machines-and-weldin.png"
                alt="Jagdamba Engineering Workshop"
                className="rounded-lg shadow-2xl w-full border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-card scroll-mt-20">
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
              className="flex items-center space-x-2 justify-center py-4 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              <Factory className="h-4 w-4" />
              <span>{t.gallery.categories.workshop}</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2 justify-center py-4 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              <Wrench className="h-4 w-4" />
              <span>{t.gallery.categories.manufacturing}</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2 justify-center py-4 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              <Award className="h-4 w-4" />
              <span>{t.gallery.categories.repair}</span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2 justify-center py-4 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              <Users className="h-4 w-4" />
              <span>{t.gallery.categories.machines}</span>
            </Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Large Lathe Machine with Marigold Garland */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01136.JPG-awFqDyNo6XV7zfxEtxKBjWOWEhfKOv.jpeg"
                alt="Large Lathe Machine with Marigold Garland"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Heavy Lathe Machine</h3>
                  <p className="text-sm opacity-90">Precision Manufacturing</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Workshop Interior Overview */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01146.JPG-HuuHqENtolEabRm8GbRpcJJdRoTeCf.jpeg"
                alt="Workshop Interior with High Ceiling"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Workshop Interior</h3>
                  <p className="text-sm opacity-90">Spacious Manufacturing Facility</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Red Drilling Machine */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01144.JPG-g2dkY5xb86L3DwTv1jrKMcsdNpDRV4.jpeg"
                alt="Red Drilling Machine and Workshop Equipment"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Drilling Equipment</h3>
                  <p className="text-sm opacity-90">Precision Drilling Operations</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Band Saw Machines */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01143.JPG-WLHDX2Er1Th7HhBJh4yzzwUb93VPzL.jpeg"
                alt="Band Saw Machines for Metal Cutting"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Band Saw Machines</h3>
                  <p className="text-sm opacity-90">Metal Cutting Operations</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Precision Milling Machine */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01139.JPG-ZMG1TxlYGrgJk8SrJMGiP9mfKlmx19.jpeg"
                alt="Precision Milling and Drilling Machine"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Milling Machine</h3>
                  <p className="text-sm opacity-90">Precision Component Manufacturing</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Large Lathe with Belt Drive */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01142.JPG-q9n0EJPsHlwWVlGecsl5YDr0vXkqEa.jpeg"
                alt="Large Lathe Machine with Belt Drive System"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Belt Drive Lathe</h3>
                  <p className="text-sm opacity-90">Heavy Duty Machining</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Yellow Hydraulic Press */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01145.JPG-INC5p8lbRVpLr0E3nucRFY2oztXJIn.jpeg"
                alt="Yellow Hydraulic Press Machine"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Hydraulic Press</h3>
                  <p className="text-sm opacity-90">Heavy Duty Pressing Operations</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Modern Lathe Machine */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01138.JPG-cd5j0Dn8xK2Ro51idH82UtTHhFyiXR.jpeg"
                alt="Modern Lathe Machine with Orange Accents"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Modern Lathe</h3>
                  <p className="text-sm opacity-90">Advanced Machining Technology</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Green Lathe Machine */}
            <div className="group relative overflow-hidden rounded-lg bg-secondary hover:shadow-2xl transition-all duration-300 border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC01137.JPG-FzpP0RYmpfKuwmMABG1hGLpGFo8fAI.jpeg"
                alt="Green Lathe Machine with Belt Drive"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-foreground">
                  <h3 className="font-heading font-bold text-lg">Industrial Lathe</h3>
                  <p className="text-sm opacity-90">Crusher Component Manufacturing</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              variant="outline"
              className="flex items-center space-x-2 mx-auto px-8 py-4 hover:border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              <Camera className="h-5 w-5" />
              <span>View More Photos</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-balance mb-6 text-foreground">
              {t.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex flex-col items-center space-y-4">
                  <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                    <a
                      href="tel:+919784064136"
                      className="font-heading font-bold text-lg hover:text-primary transition-colors duration-200 block"
                    >
                      {t.contact.phone}
                    </a>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex flex-col items-center space-y-4">
                  <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/919784064136?text=Hi%20Jagdamba%20Engg.%20Works,%20I%20need%20crusher%20manufacturing%20and%20repair%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading font-bold text-lg hover:text-primary transition-colors duration-200 block"
                    >
                      {t.contact.phone}
                    </a>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {/* Patan Workshop */}
            <Card className="overflow-hidden border-border bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{t.contact.locations.patan}</span>
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
            <Card className="overflow-hidden border-border bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{t.contact.locations.jaipur}</span>
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
            <Card>
              <CardHeader className="text-center pb-6">
                <CardTitle className="font-heading font-bold text-2xl mb-2">Get Quote for Your Crusher Needs</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Send us your requirements and photos of crusher parts for accurate quotation
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">{t.contact.form.name}</label>
                    <input
                      type="text"
                      required
                      className="w-full p-4 rounded-md bg-input text-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder={t.contact.form.name}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">{t.contact.form.phone}</label>
                    <input
                      type="tel"
                      required
                      className="w-full p-4 rounded-md bg-input text-foreground border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                      placeholder={t.contact.form.phone}
                    />
                  </div>

                  <Button type="submit" className="w-full py-4 font-semibold" size="lg">
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img src="/jagdamba-logo.png" alt="Jagdamba Engg. Works Logo" className="h-8 w-8" />
              <h3 className="font-heading font-bold text-xl text-primary">Jagdamba Engg. Works</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">Crusher Manufacturing & Repair Experts Since 1990</p>
            <p className="text-sm text-muted-foreground">© 2024 Jagdamba Engg. Works. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919784064136?text=Hi%20Jagdamba%20Engg.%20Works,%20I%20need%20crusher%20part%20repair."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
