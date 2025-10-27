import { BarChart3, Globe2, Building2, Users, PhoneCall, Zap, DollarSign } from "lucide-react";

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
      title: "VoIP Specialists",
      desc: "Deep expertise in FreeSWITCH, FusionPBX, and Kamailio platforms.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Startup Agility",
      desc: "Fast decision-making and rapid deployment capabilities.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Cost Effective",
      desc: "Competitive pricing with no compromise on quality.",
    },
  ];