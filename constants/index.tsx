import { label } from "framer-motion/client";
import {
  BarChart3,
  Globe2,
  Building2,
  Users,
  PhoneCall,
  Zap,
  DollarSign,
  Layers,
  ShieldCheck,
  Wrench,
  MonitorCheck,
  Server,
} from "lucide-react";

export const navItems = [
  {
    name: "SERVICES",
    dropdown: [
      { label: "FreeSWITCH Development", path: "#" },
      { label: "WebRTC Development", path: "#" },
      { label: "Asterisk Development", path: "#" },
      { label: "OpenSIPs Development", path: "#" },
      { label: "Kamailio Development", path: "#" },
      { label: "Android Development", path: "#" },
      { label: "iOS Development", path: "#" },
      { label: "React Native Development", path: "#" },
      { label: "Flutter App Development", path: "#" },
      { label: "Front End Development", path: "#" },
      { label: "Back End Development", path: "#" },
    ],
  },
  {
    name: "SOLUTIONS",
    dropdown: [
      { label: "VoIP Solutions", path: "/voip-solutions" },
    ],
  },
  {
    name: "OUR PRODUCTS",
    path: "/our-products",
  },
  {
    name: "HIRE DEVELOPERS",
    dropdown: [
      { label: "Hire VOIP Developers", path: "#" },
      { label: "Hire Mobile Developers", path: "#" },
    ],
  },
  {
    name: "ABOUT",
    path: "/about-us",
  },
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
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    title: "CLIENT FOCUS",
    desc: "Your success is our priority. We build lasting partnerships with our clients.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
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
    buttonText: "Visit Conatact Center",
    reverse: false,
  },
];

export const VoIP_SOLUTIONS_FEATURES = [
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "COST REDUCTION",
    desc: "Reduce communication costs by up to 60% with our VoIP solutions.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "ENTERPRISE GRADE",
    desc: "Reliable, secure, and scalable solutions for enterprise environments.",
  },
  {
    icon: <MonitorCheck className="w-8 h-8 text-blue-600" />,
    title: "24/7 MONTITORING",
    desc: "Continuous monitoring and support to ensure optimal performance.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "CUSTOM INTEGRATION",
    desc: "Seamless integration with your existing business systems and CRM.",
  },
];

export const VOIP_SOLUTIONS_SERVICES = [
  {
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    title: "FreeSWITCH",
    desc: "Robust open-source telephony platform for scalable voice and video communication.",
    services: [
      "Installation and configuration",
      "Custom dialplan development",
      "Module configuration and optimization",
      "Performance tuning and monitoring",
      "Integration with existing systems",
      "Multi-protocol support (SIP, H.323, etc.)",
    ],
    commonUseCases: [
      "Enterprise PBX",
      "Carrier Systems",
      "Call Centers",
      "Video Conferencing",
    ],
    cta: [
      { label: "Learn More", href: "#" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    icon: <Server className="w-8 h-8 text-blue-600" />,
    title: "FusionPBX",
    desc: "Web-based GUI for FreeSWITCH. Ideal for multi-tenant PBX setups.",
    services: [
      "Multi-tenant deployment",
      "Custom skin and theme development",
      "IVR design and implementation",
      "User management and permissions",
      "Call routing configuration",
      "Reporting and analytics setup",
    ],
    commonUseCases: [
      "Hosted PBX",
      "Multi-tenant Systems",
      "Service Providers",
      "Enterprise Solutions",
    ],
    cta: [
      { label: "Learn More", href: "#" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-600" />,
    title: "Kamailio",
    desc: "High-performance SIP server for routing, NAT traversal, and load balancing.",
    services: [
      "Carrier-grade SIP proxy solutions",
      "SIP trunking implementation",
      "Session Border Controller (SBC) setup",
      "Load balancing and failover",
      "Security and fraud prevention",
      "Real-time billing integration",
    ],
    commonUseCases: [
      "SIP Trunking",
      "Load Balancing",
      "Session Border Control",
      "Carrier Networks",
    ],
    cta: [
      { label: "Learn More", href: "#" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    title: "SIP Services",
    desc: "End-to-end SIP integration for comprehensive VoIP systems.",
    services: [
      "SIP trunk setup and configuration",
      "Softphone provisioning",
      "NAT traversal solutions",
      "Protocol debugging and troubleshooting",
      "Quality of Service (QoS) optimization",
      "Codec selection and optimization",
    ],
    commonUseCases: [
      "VoIP Integration",
      "Softphone Deployment",
      "Protocol Troubleshooting",
    ],
    cta: [
      { label: "Learn More", href: "#" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    title: "Call Center Solutions",
    desc: "Custom-built call center systems for customer support and outbound campaigns.",
    services: [
      "Live dashboards and real-time monitoring",
      "Agent performance monitoring",
      "Call recording and quality assurance",
      "Interactive Voice Response (IVR) flows",
      "Queue management and routing",
      "Reporting and analytics",
    ],
    commonUseCases: [
      "Customer Support",
      "Sales Teams",
      "Telemarketing",
      "Help Desk",
    ],
    cta: [
      { label: "Learn More", href: "#" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];
