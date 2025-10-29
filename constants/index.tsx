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
      { label: "Call Center Solutions", path: "/call-center-solution" },
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

export const CALL_CENTER_SOLUTION = [
  {
    id: 1,
    icon: "/images/solutions/call-center/Call-Center-02.svg",
    title: "Inbound Call Center Solution",
    description:
      "Provide context-driven responses to clients and enhance customer engagement with inbound contact center software.",
  },
  {
    id: 2,
    icon: "/images/solutions/call-center/Call-Center-03.svg",
    title: "Outbound Call Center Solution",
    description:
      "Rapidly increase the results of any outbound campaigns with automation and seize more deals with outbound contact center software.",
  },
  {
    id: 3,
    icon: "/images/solutions/call-center/Call-Center-04.svg",
    title: "Blended Call Center Solution",
    description:
      "Extend the capabilities of agents and maximize resource utilization by managing the call volume efficiently with blended contact center software.",
  },
  {
    id: 4,
    icon: "/images/solutions/call-center/Call-Center-05.svg",
    title: "Omni Channel Call Center Solution",
    description:
      "Deliver customer service and reach potential leads on their favorite communication channels with omnichannel contact center software.",
  },
];

export const CALL_CENTER_SOLUTION_FEATURES = [
  {
    id: 1,
    icon: "/images/solutions/call-center/Call-Center-06.svg",
    title: "Better Customer Care Management",
    description:
      "A unified agent view with automated call distribution and other inbound campaign empowerment features increases first call resolution, customer satisfaction rate, net promoter score, and other KPIs.",
    features: [
      ["Automated call distribution", "Random distribution"],
      [
        "Holiday or time condition based call distribution",
        "Call routing to the agents with the fewest calls",
      ],
      ["Sticky agent", "Least talk time based call routing"],
      ["Skill based routing", "Round robin call routing"],
      ["Ring Group"],
    ],
  },
  {
    id: 2,
    icon: "/images/solutions/call-center/Call-Center-07.svg",
    title: "Amplified sales with automation",
    description:
      "Impress more prospects and lock more deals with automation and actionable features that help you reach prospective clients when they are likely to make a purchase. Identify the opportunities to engage and sell effortlessly.",
    features: [
      ["Campaign lead filter", "Predictive dialer"],
      ["Voice/ SMS broadcasting", "Progressive dialer"],
      ["Auto dialer", "Preview dialer"],
      ["Manual dialer"],
    ],
  },
  {
    id: 3,
    icon: "/images/solutions/call-center/Call-Center-07.svg",
    title: "Empowered agents for excellent productivity",
    description:
      "A unified view of the agents and more agent specific features provide the much needed support to harness the real capacity of the software and self. We have developed the most agent friendly call center solution in the world.",
    features: [
      ["Remote agent features", "Voicemail support"],
      ["Agent side reports"],
    ],
  },
  {
    id: 4,
    icon: "/images/solutions/call-center/Call-Center-08.svg",
    title: "More controlled conversations to seize more deals",
    description:
      "Lead the conversation and make it effective with the most painstakingly developed features of this call center solution. Our contact center software provides an extensive range of call control features and CTI integration for better command.",
    features: [
      ["Soundboard Avatar", "Blind and attended call transfer"],
      ["Chat", "Call script"],
      ["Call park and pickup", "CMS integration"],
      ["Multilingual support", "Customizable music on hold (MoH)"],
    ],
  },
  {
    id: 5,
    icon: "/images/solutions/call-center/Call-Center-09.svg",
    title: "Enhance branding for better positioning",
    description:
      "Be the brand that customers love to continue with and prospects desire to associate with by making your process screening more effective and effortless. Our meticulous supervisory features aid in augmenting the quality of service and quality of calls.",
    features: [
      ["Agent statistics", "Whisper"],
      ["Live dashboard", "Conference calling"],
      ["Barge-in", "Call recording with automated archiving"],
    ],
  },
  {
    id: 6,
    icon: "/images/solutions/call-center/Call-Center-10.svg",
    title: "Data driven and actionable insight",
    description:
      "Stop assuming and start taking concrete actions that lead to fruitful results using the rich data set your business has. Our best call center software will extract data and represent them as the key performance indicators to help you make reliable actions.",
    features: [
      ["Live statistics", "Call detail logs"],
      ["Account statistics", "Reports"],
    ],
  },
];

export const CALL_CENTER_SOLUTION_CARDS = [
  {
    icon: "/images/solutions/call-center/Call-Center-11.svg",
    title: "Extensive management",
    description:
      "Manage campaigns, teams, and other associates in a call center with a GUI based solution that gives close administration capabilities:",
    features: [
      "Campaign management",
      "Trunk management",
      "DID number management",
      "Lead management",
      "Web form management",
      "Called ID controls",
      "E.164 number support",
    ],
  },
  {
    icon: "/images/solutions/call-center/Call-Center-12.svg",
    title: "Automation and Extensive Control",
    description:
      "Make the most out of existing resources by taking advantage of call center automation technology incorporated into the call center software.",
    features: [
      "IVR",
      "Answering machine detection",
      "Blacklist",
      "DNC control",
      "Blacklisting/ Whitelisting",
      "Disposition",
    ],
  },
  {
    icon: "/images/solutions/call-center/Call-Center-05.svg",
    title: "All-inclusive Solution",
    description:
      "Augment the power of your call center system that is empowered with third party integrations to avail the missing yet vital features and communication channels.",
    features: ["SMS", "Whatsapp", "Email", "Facebook", "Twitter", "CRM", "PBX"],
  },
];

export const CALL_CENTER_SOLUTION_TENANTS = [
  {
    title: "Single Tenant Call Center Solution",
    desc: "Take a lead in your niche with competitive features incorporated into the best call center software. Deliver jaw dropping customer experience, improve conversation rate, increase sales rate, and leverage other advantages by optimizing business processes using our top rated call center software. Keep track of all agents, customers, calls, and other entities and administer the operations with utmost efficiency.",
    image: "/images/solutions/call-center/Single-Tenant-Call-Center.webp",
  },
  {
    title: "Multi Tenant Call Center Solution",
    desc: "Stop dreaming and start earning with the most powerful multi tenant call center software. The most scalable multi tenant call center system with integrated billing to run your own business with any of the preferred modes from SaaS, PaaS, or UCaaS. The omnichannel communication, signup APIs, and several never seen before features make it one of the most competitive multi tenant contact center solutions.",
    image: "/images/solutions/call-center/Multi-Tenant-Call-Center.webp",
  },
];

export const CALL_CENTER_SOLUTION_FAQ = [
  {
    question: "What is Call Center Solution?",
    answer: "It is an extensive communication solution that is developed to manage diverse types of customer interactions across unified channels within a single platform. It supports the effective management of multiple calls in parallel within a single system. It also provides efficient team management and real time monitoring to improve performance and output. Modern contact center solutions have several applications to fulfill business goals.  ",
  },
  {
    question: "DO you have an enterprise grade call center solution?",
    answer: "Yes, it is an enterprise grade solution that supports crystal clear voice and other unified communication channels. Its automation features help in catering to clients even with limited manpower. It has an array of enterprise features. Moreover, we support extended feature addition based on your custom needs. ",
  },
  {
    question: "How can my business benifits from your call center software?",
    answer: "There are several advantages of using our call center solution like increasing customer engagement, improving call connect rate, enhancing first contact resolution, more controlled conversations, and more. If you use a multi tenant call center solution, you can also take advantage of generating revenue. ",
  },
  {
    question: "Do you have cloud call center solution?",
    answer: "We have the most flexible and robust contact center software. It supports different types of hosting and architecture models. Along with single server or shared servers, it can also be hosted on the cloud space and furnish you with the cloud based call center solution. ",
  },
];