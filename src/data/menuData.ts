export interface MenuCategory {
  id: string;
  name: string;
  columns: {
    title: string;
    items: string[];
  }[];
}

export const MEGA_MENU_DATA: MenuCategory[] = [
  {
    id: "ai-services",
    name: "AI Services",
    columns: [
      {
        title: "AI Applications",
        items: [
          "AI Web Development",
          "AI iOS Apps",
          "AI Healthcare Apps",
          "AI Healthcare Software",
          "AI Android Apps",
          "AI App Development",
          "AI Dating Apps",
        ],
      },
      {
        title: "Agentic AI",
        items: [
          "AI Agent Development",
          "AI Blockchain Solutions",
          "Fintech AI Solutions",
          "Automotive AI Solutions",
          "Travel AI Solutions",
          "AI Banking Solutions",
          "AI Retail Solutions",
        ],
      },
      {
        title: "Generative AI",
        items: [
          "Azure AI & ML Services",
          "AI Software Development",
          "Enterprise AI Solutions",
          "AI for Startups",
        ],
      },
      {
        title: "Conversational AI",
        items: [
          "Ecommerce AI Chatbots Development",
          "Voice AI Assistants",
          "Customer Service AI Agents",
          "Multilingual LLM Bots",
        ],
      },
    ],
  },
  {
    id: "enterprises",
    name: "Enterprises",
    columns: [
      {
        title: "Enterprise Transformation",
        items: [
          "Legacy Monolith Modernization",
          "Enterprise AI Adoption",
          "CMMI Level 5 Governed Squads",
          "ERP & CRM Engineering",
        ],
      },
      {
        title: "Cloud & Security",
        items: [
          "Multi-Cloud (AWS, Azure, GCP)",
          "ISO 27001 Cybersecurity",
          "Kubernetes & Microservices",
          "FinOps Cost Optimization",
        ],
      },
      {
        title: "Microsoft Practice",
        items: [
          ".NET Core Enterprise Apps",
          "Dynamics 365 Customization",
          "Power Platform & Automations",
          "Azure DevOps CI/CD",
        ],
      },
    ],
  },
  {
    id: "services",
    name: "Services",
    columns: [
      {
        title: "Product Engineering",
        items: [
          "Custom Software Development",
          "SaaS Platform Development",
          "Web Applications (Next.js/React)",
          "Mobile Apps (iOS & Android)",
          "API Architecture & Microservices",
        ],
      },
      {
        title: "Experience & Design",
        items: [
          "UI/UX Product Design",
          "Design Systems & Tokenization",
          "UX Audits & User Research",
          "Interactive Prototyping",
        ],
      },
      {
        title: "Dedicated Teams",
        items: [
          "Dedicated Engineering Pods",
          "Fractional CTO / Co-Founder",
          "Staff Augmentation (100% In-House)",
          "QA & Automated Testing",
        ],
      },
    ],
  },
  {
    id: "industries",
    name: "Industries",
    columns: [
      {
        title: "Financial Services",
        items: [
          "Fintech & Neobanking",
          "Algorithmic Trading & Wealthtech",
          "Payment Gateways & Wallets",
          "Crypto & Blockchain",
        ],
      },
      {
        title: "Health & Life Sciences",
        items: [
          "HIPAA Compliant Telehealth",
          "Medical Imaging AI",
          "EHR & Clinical Data Integration",
        ],
      },
      {
        title: "Commerce & Logistics",
        items: [
          "Retail & E-Commerce",
          "Supply Chain & Fleet Intelligence",
          "Manufacturing & Industrial IoT",
          "Travel & Hospitality",
        ],
      },
    ],
  },
  {
    id: "solutions",
    name: "Solutions",
    columns: [
      {
        title: "Accelerator Solutions",
        items: [
          "6-8 Week MVP Launchpad",
          "AI Search & RAG Framework",
          "Computer Vision Edge Suite",
          "Autonomous Workflow Engine",
        ],
      },
      {
        title: "Enterprise Solutions",
        items: [
          "Document AI & Intelligent OCR",
          "Real-Time Telemetry Pipeline",
          "B2B Customer Portal Suite",
        ],
      },
    ],
  },
  {
    id: "about-us",
    name: "About Us",
    columns: [
      {
        title: "Company Overview",
        items: [
          "20+ Years Engineering Heritage",
          "CMMI Level 5 Maturity Standard",
          "100% In-House Talent Model",
          "Global Delivery Hubs",
        ],
      },
      {
        title: "Trust & Certifications",
        items: [
          "ISO 27001 Certified Security",
          "ISO 9001 Quality Management",
          "AWS & Microsoft Certified Partner",
        ],
      },
    ],
  },
  {
    id: "reviews",
    name: "Reviews",
    columns: [
      {
        title: "Client Testimonials",
        items: [
          "Fortune 500 Enterprise Endorsements",
          "VC-Backed Startup Founder Stories",
          "Clutch & GoodFirms Top Rated",
          "Verified Case Studies",
        ],
      },
    ],
  },
  {
    id: "our-brands",
    name: "Our Brands",
    columns: [
      {
        title: "CIS Ecosystem",
        items: [
          "CISIN (Cyber Infrastructure)",
          "CIS AI Labs",
          "CIS Enterprise Modernization",
          "CIS Startup Ventures Studio",
        ],
      },
    ],
  },
];
