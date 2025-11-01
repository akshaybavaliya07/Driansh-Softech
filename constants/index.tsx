import {
  BarChart3,
  Globe2,
  Building2,
  Users,
  PhoneCall,
  Zap,
  DollarSign,
} from "lucide-react";

export const navItems = [
  {
    name: "SERVICES",
    dropdown: [
      {
        title: "VOIP DEVELOPMENT",
        path: "/services/voip",
        items: [
          { label: "FreeSWITCH Development", path: "/services/freeswitch" },
          { label: "WebRTC Development", path: "/services/webRTC" },
          { label: "Asterisk Development", path: "/services/asterisk" },
          { label: "OpenSIPs Development", path: "/services/openSIPs" },
          { label: "Kamailio Development", path: "/services/kamailio" },
        ],
      },
      {
        title: "OPEN SOURCE",
        path: "#",
        items: [
          { label: "Kazoo Development", path: "/services/open-source/kazoo" },
          { label: "FusionPBX Development", path: "/services/open-source/fusionPBX" },
          { label: "Linphone Development", path: "/services/open-source/linphone" },
        ],
      },
      {
        title: "PLATFORM",
        path: "#",        
        items: [{ label: "SignalWire Development", path: "/services/paltform/signalwire" }],
      },
      {
        title: "DEVOPS SERVICES",
        path: "/services/devops",
        items: [],
      },
      {
        title: "PRODUCT ENGINEERING",
        path: "/services/devopsproduct",
        items: [],
      },
      {
        title: "VOIP SERVICES",
        path: "/services/voiptesting",
        items: [],
      },
      {
        title: "MOBILE APP DEVELOPMENT",
        path: "/services/mobile-app/android",
        items: [
          { label: "Android Development", path: "/services/mobile-app/android" },
          { label: "iOS Development", path: "/services/mobile-app/ios" },
          { label: "React Native Development", path: "/services/mobile-app/react" },
          { label: "Flutter App Development", path: "/services/mobile-app/flutter" },
        ],
      },
      {
        title: "WEB DEVELOPMENT",
        path: "/services/web-dev/web",
        items: [
          { label: "Front End Development", path: "/services/web-dev/fronted" },
          { label: "Back End Development", path: "/services/web-dev/backend" },
        ],
      },
    ],
  },
  {
    name: "SOLUTIONS",
    dropdown: [
      {
        title: "TAILORCRAFT SOLUTIONS",
        items: [
          { label: "Multi Tenant IP PBX Solution", path: "/multi-tenant-ip-pbx-solution" },
          { label: "Call Center Solution", path: "/call-center-solution" },
          { label: "Voice Broadcasting Solution", path: "/voice-broadcasting-solution" },
          { label: "Audio & Video Conferencing Solution", path: "/audio-video-conferencing-solution" },
          { label: "Unified Communication Solution", path: "/unified-communications-solution" },
          { label: "Class 5 Softswitch Solution", path: "/class-5-softswitch-solution" },
          { label: "Class 4 Softswitch Solution", path: "/class-4-softswitch-solution" },
          { label: "VoIP Billing Solution", path: "/voip-billing-solution" },
          { label: "Calling Card Solution", path: "/calling-card-solution" },
          { label: "Enterprise VoIP Solution", path: "/enterprise-voip-solutions" },
          { label: "VoIP Business Solutions", path: "/voip-business-solutions" },
          { label: "Faxing Solution", path: "/faxing-solution" },
          { label: "Live Call Monitoring Solution", path: "/live-call-monitoring-solution" },
        ],
      },
    ],
  },
  { name: "OUR PRODUCTS", path: "/our-products" },
  { name: "ABOUT", path: "/about-us" },
];

export const ABOUT_PAGE_SECTIONS = [
  {
    title: "Our Mission",
    image: "/images/vision.svg",
    text: `To empower businesses with innovative VoIP solutions that drive growth, reduce costs, and improve communication efficiency. As a startup, we're committed to delivering cutting-edge FreeSWITCH, FusionPBX, and Kamailio solutions with the agility and personal attention that only a young, focused team can provide.`,
  },
  {
    title: "Our Vision",
    image: "/images/mission.svg",
    text: `To become the leading VoIP startup in India and beyond, known for our technical innovation, startup agility, and transformative communication solutions. We envision a future where every business, regardless of size, has access to enterprise-grade VoIP technology that's both powerful and affordable.`,
  },
];

export const ABOUT_PAGE_FEATURES = [
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    title: "INNOVATION",
    desc: "We thrive on innovation, constantly pushing the boundaries of what's possible to create transformative solutions.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    title: "EXCELLENCE",
    desc: "Setting high standards, continuously raising the bar, and striving for excellence in all endeavours.",
  },
  {
    
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "CLIENT FOCUS",
    desc: "Your success is our priority. We build lasting partnerships with our clients.",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    title: "GLOBAL REACH",
    desc: "Serving clients worldwide with local expertise and global standards.",
  },
];

export const ABOUT_PAGE_TECH_ADVANTAGES = [
  {
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    title: "VoIP SPECIALISTS",
    desc: "Deep expertise in FreeSWITCH, FusionPBX, and Kamailio platforms.",
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: "STARTUP AGILITY",
    desc: "Fast decision-making and rapid deployment capabilities.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "COST EFFECTIVE",
    desc: "Competitive pricing with no compromise on quality.",
  },
];

export const OUR_PRODUCTS = [
  {
    id: "contactCenter",
    logo: "/logo.jpg",
    image: "/images/our-products-2.webp",
    title: "Driansh Contact Center Solution",
    description:
      "Driansh Contact Center platform empowers businesses to deliver seamless, personalized, and efficient customer interactions across voice, email, chat, and social media. With built-in automation, AI-powered insights, and CRM integration, it enables smarter communication, higher agent productivity, and superior customer satisfaction.",
    points: [
      "Unified communication across multiple digital channels",
      "Real-time analytics and performance dashboards",
      "Smart automation for faster response and resolution",
    ],
    // buttonText: "Visit Conatact Center",
    reverse: false,
  },
];