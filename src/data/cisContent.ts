export interface CaseStudy {
  id: string;
  client: string;
  logoText?: string;
  industry: string;
  badge: string;
  title: string;
  challenge: string;
  solution: string;
  technology: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export interface ServiceCategory {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  offerings: {
    name: string;
    description: string;
    deliverables: string[];
    tags: string[];
  }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlightMetric: string;
  highlightText: string;
  capabilities: string[];
  sampleUseCases: string[];
  color: string;
}

export const CIS_METRICS = [
  {
    number: "5,000+",
    value: 5000,
    suffix: "+",
    label: "Successful Projects Delivered",
    subtext: "Across 30+ countries for startups to Fortune 500s",
  },
  {
    number: "1,000+",
    value: 1000,
    suffix: "+",
    label: "In-House Technology Experts",
    subtext: "100% direct-hire engineers, AI researchers & designers",
  },
  {
    number: "$10B+",
    value: 10,
    prefix: "$",
    suffix: "B+",
    label: "Client Value & Revenues Generated",
    subtext: "Powering market leaders and high-growth scaleups",
  },
  {
    number: "20+",
    value: 20,
    suffix: "+",
    label: "Years of Engineering Excellence",
    subtext: "Established in 2003 with continuous innovation",
  },
];

export const TRUST_CREDENTIALS = [
  {
    code: "CMMI Level 5",
    title: "CMMI Level 5 Appraised",
    category: "Process & Delivery Maturity",
    description: "Highest maturity level globally for software engineering, predictability and quality management.",
    badge: "Top 2% Worldwide",
  },
  {
    code: "ISO 27001",
    title: "ISO/IEC 27001 Certified",
    category: "Information Security",
    description: "Bank-grade information security management protecting intellectual property and data pipelines.",
    badge: "Enterprise Security",
  },
  {
    code: "ISO 9001",
    title: "ISO 9001:2015 Certified",
    category: "Quality Management",
    description: "Standardized quality control across all stages of the software development lifecycle.",
    badge: "Quality Assured",
  },
  {
    code: "100% In-House",
    title: "Zero Freelance / Direct Talent",
    category: "Talent Model",
    description: "Fully dedicated, vetted teams working in synchronized timezones under strict NDAs.",
    badge: "Dedicated Teams",
  },
  {
    code: "Tier-1 Cloud",
    title: "AWS & Microsoft Certified Partner",
    category: "Cloud Architecture",
    description: "Direct partner certifications across Azure, AWS, and Google Cloud Platform infrastructures.",
    badge: "Certified Cloud",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "nokia",
    client: "Nokia",
    industry: "Telecom & Embedded Systems",
    badge: "Global Enterprise",
    title: "Next-Gen Network Telemetry & Real-Time Monitoring Platform",
    challenge:
      "Modernize massive high-throughput telemetry streams requiring ultra-low latency processing and automated anomaly detection across global networks.",
    solution:
      "Engineered an event-driven microservices architecture with distributed stream processing and intelligent AI anomaly detection models.",
    technology: ["Agentic AI", "Kubernetes", "Apache Kafka", "Go", "React", "AWS"],
    metrics: [
      { label: "Data Throughput", value: "10M+ ops/sec" },
      { label: "Anomaly Detection", value: "< 2.4s latency" },
      { label: "Infrastructure TCO", value: "-38% reduction" },
    ],
    accentColor: "#0066cc",
  },
  {
    id: "careem",
    client: "Careem (Uber Company)",
    industry: "Mobility & Super App",
    badge: "Unicorn Scale",
    title: "AI-Powered Fleet Dispatch & Real-Time Logistics Optimization",
    challenge:
      "Scale algorithmic ride dispatching and multi-service order routing to millions of active daily users with sub-second response times.",
    solution:
      "Implemented high-concurrency cloud backend pipelines with predictive geospatial AI models for driver-passenger matching.",
    technology: ["Python", "PyTorch", "Node.js", "Redis Cluster", "GCP", "PostgreSQL"],
    metrics: [
      { label: "Daily Active Users", value: "5M+" },
      { label: "Dispatch Latency", value: "99.8% sub-100ms" },
      { label: "Driver Utilization", value: "+24% increase" },
    ],
    accentColor: "#f15a24",
  },
  {
    id: "amcor",
    client: "Amcor",
    industry: "Global Manufacturing & Packaging",
    badge: "Fortune 500",
    title: "AI Computer Vision for Automated Production Quality Inspection",
    challenge:
      "Eliminate manufacturing defect slippage in high-speed industrial packaging lines with zero tolerance for downtime.",
    solution:
      "Deployed edge-based computer vision inference models running on industrial IoT cameras with real-time feedback loops.",
    technology: ["Computer Vision", "TensorFlow", "Edge AI", "C++", "Azure IoT", "FastAPI"],
    metrics: [
      { label: "Defect Accuracy", value: "99.94%" },
      { label: "Line Speed", value: "1,200 units/min" },
      { label: "Manual QA Overhead", value: "-75%" },
    ],
    accentColor: "#00e5ff",
  },
  {
    id: "bcg",
    client: "Boston Consulting Group (BCG)",
    industry: "Management Consulting & Data Platforms",
    badge: "Strategic Analytics",
    title: "Enterprise Strategy Analytics & Executive Intelligence Hub",
    challenge:
      "Transform complex unstructured global market datasets into interactive predictive dashboards for C-suite decision-makers.",
    solution:
      "Built a secure enterprise data platform with automated ETL pipelines, generative narrative summaries, and interactive multi-dimensional modeling.",
    technology: ["Generative AI", "TypeScript", "Next.js", "Python", "Snowflake", "AWS"],
    metrics: [
      { label: "Time to Insight", value: "Minutes vs Weeks" },
      { label: "Data Processing", value: "50TB+ aggregated" },
      { label: "Executive Adoption", value: "94% monthly active" },
    ],
    accentColor: "#10b981",
  },
  {
    id: "ups",
    client: "UPS Supply Chain Solutions",
    industry: "Global Logistics & Supply Chain",
    badge: "Enterprise Logistics",
    title: "Predictive Route Intelligence & Multi-Modal Freight Automation",
    challenge:
      "Optimize dynamic cross-border freight consolidation and customs documentation workflows across multimodal transit hubs.",
    solution:
      "Created an intelligent orchestration platform combining automated document processing (LLM/OCR) and dynamic routing heuristics.",
    technology: ["Agentic AI", "Document AI", "Java Spring Boot", "Kafka", "Azure", "React"],
    metrics: [
      { label: "Doc Processing Time", value: "45s vs 18min" },
      { label: "Routing Efficiency", value: "+19.2%" },
      { label: "Zero Customs Fines", value: "100% compliant" },
    ],
    accentColor: "#f59e0b",
  },
  {
    id: "world-vision",
    client: "World Vision",
    industry: "Non-Profit & Humanitarian",
    badge: "Global NGO",
    title: "Digital Donor Experience & Real-Time Impact Tracking Platform",
    challenge:
      "Engage millions of global sponsors with direct transparency and personalized real-time project milestones.",
    solution:
      "Architected a scalable omnichannel digital platform connecting field mobile updates directly with donor portal experiences.",
    technology: ["React Native", "Next.js", "GraphQL", "Node.js", "AWS Serverless"],
    metrics: [
      { label: "Global Donors", value: "1.2M+ active" },
      { label: "Donor Retention", value: "+32%" },
      { label: "Field Sync Time", value: "Instant real-time" },
    ],
    accentColor: "#ec4899",
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-intelligent-systems",
    num: "01",
    title: "AI & Intelligent Systems",
    tagline: "Autonomous Agents, Generative AI & Deep Learning for Production",
    description:
      "We design, build, and deploy production-grade AI systems that automate complex workflows, extract actionable intelligence, and create entirely new product paradigms.",
    icon: "Brain",
    offerings: [
      {
        name: "Generative AI & LLM Engineering",
        description: "Custom fine-tuned models, RAG pipelines, and secure enterprise LLM integrations.",
        deliverables: ["Domain-Tuned Foundation Models", "Production RAG Pipelines", "Prompt & Safety Guardrails", "Multi-Modal Applications"],
        tags: ["LLMs", "RAG", "Fine-Tuning", "LangChain", "Vector DBs"],
      },
      {
        name: "Agentic AI & Autonomous Workflows",
        description: "Multi-agent systems capable of reasoning, tool use, and end-to-end task execution.",
        deliverables: ["Autonomous Decision Agents", "Tool-Augmented AI Systems", "Multi-Agent Orchestration", "Human-in-the-Loop Safeguards"],
        tags: ["Agentic AI", "Auto-GPT", "Function Calling", "Task Planning"],
      },
      {
        name: "Computer Vision & Edge Intelligence",
        description: "Real-time object detection, quality inspection, and spatial computing pipelines.",
        deliverables: ["Industrial Defect Detection", "Video Stream Analytics", "Edge TensorRT Deployments", "Spatial AI Models"],
        tags: ["OpenCV", "YOLOv10", "TensorRT", "Edge AI", "PyTorch"],
      },
      {
        name: "AI Strategy, Governance & MLOps",
        description: "From AI readiness roadmaps to automated model training, evaluation, and drift monitoring.",
        deliverables: ["AI Feasibility Assessments", "Automated CI/CD for Models", "Model Governance & Compliance", "Cost & Latency Optimization"],
        tags: ["MLOps", "Kubeflow", "MLflow", "Data Versioning", "Governance"],
      },
    ],
  },
  {
    id: "product-engineering",
    num: "02",
    title: "Product Engineering",
    tagline: "From MVP Validation to High-Throughput SaaS Platforms",
    description:
      "Full-lifecycle software engineering from architecture and design to robust production code. We build scalable web, mobile, and cloud software engineered for millions of users.",
    icon: "Cpu",
    offerings: [
      {
        name: "Full-Stack Web & SaaS Platforms",
        description: "Multi-tenant, high-performance web applications built on modern cloud architectures.",
        deliverables: ["Multi-Tenant SaaS Backends", "High-Performance Next.js / React Frontends", "Stripe / Payment Workflows", "Real-Time Collaboration Engines"],
        tags: ["Next.js", "TypeScript", "Node.js", "Go", "GraphQL", "PostgreSQL"],
      },
      {
        name: "Mobile App Engineering (iOS & Android)",
        description: "Native and cross-platform mobile apps with fluid animations, offline sync, and hardware integrations.",
        deliverables: ["React Native & Flutter Apps", "Native Swift / Kotlin Solutions", "Offline-First Sync Engines", "Biometrics & Hardware APIs"],
        tags: ["React Native", "Flutter", "Swift", "Kotlin", "Offline Sync"],
      },
      {
        name: "Startup MVP Accelerator",
        description: "Rapid 6-8 week sprint to launch investor-ready, user-validated minimum viable products.",
        deliverables: ["Clickable Interactive Prototypes", "Production-Ready MVP Architecture", "User Onboarding & Analytics", "Investor Demo Day Prep"],
        tags: ["Rapid MVP", "Lean Tech", "Product Strategy", "Go-To-Market"],
      },
      {
        name: "Custom Software & API Ecosystems",
        description: "Bespoke internal tools, microservices, and third-party developer API platforms.",
        deliverables: ["RESTful & gRPC Microservices", "Public API Gateways & SDKs", "Webhook & Event Ingestion", "High-Concurrency Caching"],
        tags: ["Microservices", "gRPC", "API Design", "Redis", "Kafka"],
      },
    ],
  },
  {
    id: "experience-design",
    num: "03",
    title: "Experience & Design",
    tagline: "Product Strategy, Design Systems & High-Conversion UX",
    description:
      "We fuse human-centered product design with futuristic UI aesthetic. We create digital interfaces that are intuitive, memorable, and built to drive user conversion.",
    icon: "Layers",
    offerings: [
      {
        name: "UI/UX & Product Design",
        description: "User research, wireframing, high-fidelity interfaces, and micro-interactions that delight.",
        deliverables: ["User Journey Mapping", "Interactive Figma Prototypes", "Usability Testing Reports", "Design Specifications"],
        tags: ["UI/UX", "Figma", "User Research", "Interaction Design"],
      },
      {
        name: "Scalable Design Systems",
        description: "Multi-platform component libraries with tokenized variables and accessibility compliance.",
        deliverables: ["Tokenized Component Libraries", "Storybook Documentation", "Accessibility (WCAG AA)", "Figma to Code Tokens"],
        tags: ["Design Systems", "Storybook", "Accessibility", "Tailwind CSS"],
      },
      {
        name: "Product Strategy & UX Audits",
        description: "Heuristic evaluation, funnel optimization, and strategic roadmap planning.",
        deliverables: ["Conversion Rate UX Audits", "Feature Prioritization Matrix", "Competitive Benchmark Reports", "Product Growth Blueprints"],
        tags: ["Growth UX", "Funnel Optimization", "Product Discovery"],
      },
    ],
  },
  {
    id: "cloud-digital-engineering",
    num: "04",
    title: "Cloud & Digital Engineering",
    tagline: "Resilient Cloud Native, DevOps, Data Pipelines & Security",
    description:
      "Modernize infrastructure, automate deployment lifecycles, and build data lakes that power real-time analytics and mission-critical enterprise resilience.",
    icon: "Cloud",
    offerings: [
      {
        name: "Cloud Native Architecture & Migration",
        description: "AWS, Azure, and GCP multi-cloud infrastructure designed for 99.99% uptime.",
        deliverables: ["Terraform Infrastructure as Code", "Kubernetes (EKS/AKS/GKE) Clusters", "Zero-Downtime Cloud Migration", "FinOps Cloud Cost Optimization"],
        tags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "FinOps"],
      },
      {
        name: "DevOps & Continuous Delivery (CI/CD)",
        description: "Automated pipelines, progressive deployments, and automated testing suites.",
        deliverables: ["GitHub Actions / GitLab CI Pipelines", "Canary & Blue-Green Deployments", "Security Scanning (SAST/DAST)", "Infrastructure Observability"],
        tags: ["CI/CD", "Docker", "Prometheus", "Grafana", "Datadog"],
      },
      {
        name: "Data Engineering & Real-Time Streaming",
        description: "Modern data stack with automated ETL/ELT pipelines and low-latency lakehouses.",
        deliverables: ["Snowflake & Databricks Lakehouses", "Apache Kafka & Flink Streaming", "dbt Data Modeling Pipelines", "Data Governance & Lineage"],
        tags: ["Snowflake", "Kafka", "Databricks", "dbt", "Airflow"],
      },
    ],
  },
  {
    id: "enterprise-transformation",
    num: "05",
    title: "Enterprise Transformation",
    tagline: "Legacy Modernization, ERP/CRM, Microsoft Ecosystem & Security",
    description:
      "Break down legacy monolithic applications into modern event-driven architectures. Optimize enterprise business workflows with certified Microsoft, Salesforce, and ERP practices.",
    icon: "ShieldCheck",
    offerings: [
      {
        name: "Legacy Monolith Modernization",
        description: "Incremental strangler-pattern decomposition of legacy software with zero business disruption.",
        deliverables: ["Legacy Architecture Audits", "Microservices Refactoring Plans", "Database Decoupling Strategies", "Gradual Cutover Execution"],
        tags: ["Strangler Pattern", "Refactoring", "Legacy Modernization", "Domain-Driven Design"],
      },
      {
        name: "Microsoft Enterprise Solutions",
        description: "Enterprise solutions across Azure, .NET Core, Power Platform, Dynamics 365, and Microsoft 365.",
        deliverables: [".NET Enterprise Applications", "Dynamics 365 Customization", "Power Apps & Workflow Automation", "SharePoint & Teams Integration"],
        tags: [".NET", "Azure", "Power Platform", "Dynamics 365", "Microsoft 365"],
      },
      {
        name: "Enterprise Cybersecurity & Compliance",
        description: "End-to-end security architecture conforming to ISO 27001, SOC 2, HIPAA, and GDPR.",
        deliverables: ["Vulnerability Assessments & Pen Testing", "Role-Based Access Control (RBAC)", "Data Encryption at Rest & in Transit", "Compliance Readiness Audits"],
        tags: ["Cybersecurity", "ISO 27001", "SOC 2", "HIPAA", "GDPR"],
      },
    ],
  },
];

export const STARTUP_JOURNEY_STAGES = [
  {
    stage: "01",
    name: "IDEA & DISCOVERY",
    duration: "Week 1–2",
    tagline: "De-risk the concept before writing a single line of code",
    deliverables: [
      "Product Strategy & Value Proposition",
      "Technical Feasibility & Architecture Blueprint",
      "AI Opportunity Assessment & LLM Selection",
      "Interactive Wireframes & Concept Validation",
    ],
    cisRole: "Technical Co-Founder advisory & CTO-level feasibility",
  },
  {
    stage: "02",
    name: "VALIDATE & DESIGN",
    duration: "Week 2–3",
    tagline: "Design intuitive, conversion-focused user interfaces",
    deliverables: [
      "High-Fidelity Figma Prototypes",
      "Design System & UI Component Library",
      "User Journey & Retention Funnel Maps",
      "User Testing & Feedback Cycles",
    ],
    cisRole: "Design Studio & UX Research team",
  },
  {
    stage: "03",
    name: "MVP ACCELERATOR",
    duration: "Week 4–8",
    tagline: "Build a production-ready, investor-grade product fast",
    deliverables: [
      "Scalable Next.js / Mobile Frontend",
      "Cloud Microservices & Secure Auth",
      "Core AI Models & Prompt Workflows",
      "Stripe Payments & Core Transaction Loops",
    ],
    cisRole: "Dedicated Full-Stack & AI Engineering squad",
  },
  {
    stage: "04",
    name: "LAUNCH & HARDEN",
    duration: "Week 8–10",
    tagline: "Zero-friction public launch with enterprise stability",
    deliverables: [
      "Auto-Scaling Cloud Infrastructure (AWS/GCP)",
      "Automated End-to-End Testing (QA)",
      "Analytics, Error Tracking & Live APM",
      "Security Hardening & Penetration Testing",
    ],
    cisRole: "DevOps, QA Automation & Launch commanders",
  },
  {
    stage: "05",
    name: "GROW & SCALE",
    duration: "Month 3+",
    tagline: "Scale infrastructure to millions of active users & ARR",
    deliverables: [
      "Database Sharding & Caching Optimization",
      "Feature Iteration & A/B Experimentation",
      "Autonomous Agent & Workflow Expansion",
      "Elastic Engineering Capacity on Demand",
    ],
    cisRole: "Long-term Technology Partner & Scaling engine",
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "fintech",
    name: "FinTech & Banking",
    tagline: "Ultra-secure transaction engines, algorithmic risk AI, and digital banking platforms",
    description:
      "We engineer bank-grade financial platforms adhering to PCI-DSS, Open Banking APIs, automated fraud detection, and multi-asset trading engines.",
    highlightMetric: "$4B+",
    highlightText: "Annual transactions processed securely",
    capabilities: [
      "PCI-DSS Level 1 Compliant Architectures",
      "Real-Time AI Fraud & Anomaly Detection",
      "Open Banking APIs & Core Banking Integration",
      "Automated KYC/AML Verification Workflows",
      "Micro-Lending & Smart Contract Settlement",
    ],
    sampleUseCases: ["Digital Wallets & Neobanking", "Algorithmic Wealthtech", "Instant B2B Cross-Border Payments"],
    color: "#00e5ff",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-compliant telehealth, medical imaging AI, and clinical data orchestration",
    description:
      "Accelerating patient outcomes with secure medical records (EHR/FHIR), automated diagnostic computer vision, and patient engagement portals.",
    highlightMetric: "99.9%",
    highlightText: "HIPAA & GDPR data compliance standard",
    capabilities: [
      "HIPAA / HITECH Compliant Cloud Architecture",
      "FHIR & HL7 Interoperability Connectors",
      "Diagnostic Computer Vision for Radiology",
      "Remote Patient Monitoring (RPM) Mobile Apps",
      "Clinical Trial Data Management Systems",
    ],
    sampleUseCases: ["Telemedicine Platforms", "AI Symptom Checker & Triage", "Medical Device IoT Ingestion"],
    color: "#10b981",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    tagline: "Headless commerce, AI personalized recommendations, and dynamic inventory",
    description:
      "Transforming omnichannel retail with sub-second page loads, real-time demand forecasting, visual search, and high-conversion checkout flows.",
    highlightMetric: "+34%",
    highlightText: "Average conversion uplift via AI personalization",
    capabilities: [
      "Headless E-Commerce (Shopify Plus, Commercelayer)",
      "Real-Time Personalized Recommendation Engines",
      "Dynamic Pricing & Inventory Predictive AI",
      "Visual Search & Virtual Try-On AR",
      "High-Concurrency Flash-Sale Infrastructure",
    ],
    sampleUseCases: ["Omnichannel D2C Marketplaces", "Automated Warehouse Fulfillment", "AI Customer Support Chatbots"],
    color: "#f15a24",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    tagline: "Autonomous route dispatch, predictive maintenance, and multi-modal fleet intelligence",
    description:
      "End-to-end supply chain visibility from warehouse robotics to cross-border freight automation and driver telematics.",
    highlightMetric: "-28%",
    highlightText: "Fleet fuel & transit route reduction",
    capabilities: [
      "Dynamic Vehicle Routing & Dispatch Algorithms",
      "IoT Telematics & Predictive Maintenance",
      "Automated Customs Document Extraction (OCR/LLM)",
      "Warehouse Management Systems (WMS)",
      "Cold Chain Sensor Tracking & Alerts",
    ],
    sampleUseCases: ["Last-Mile Delivery Platforms", "Global Freight Brokerage Marketplaces", "Yard Management Systems"],
    color: "#f59e0b",
  },
  {
    id: "saas",
    name: "SaaS & Enterprise Tech",
    tagline: "Multi-tenant cloud architectures, self-service billing, and embedded AI agents",
    description:
      "We partner with SaaS founders and CTOs to engineer high-velocity software products that scale from pre-seed to IPO without technical debt.",
    highlightMetric: "10M+",
    highlightText: "Concurrent multi-tenant user scale",
    capabilities: [
      "Multi-Tenant Database & Partitioning Schemes",
      "Stripe / Chargebee Tiered Subscription Engine",
      "Role-Based Access Control (RBAC) & SAML SSO",
      "Embedded AI Copilots & Analytics Dashboards",
      "Public Developer APIs, SDKs & Webhooks",
    ],
    sampleUseCases: ["B2B Workflow Automation Tools", "Collaborative Workspace Apps", "AI Vertical Copilots"],
    color: "#818cf8",
  },
  {
    id: "automotive",
    name: "Automotive & Mobility",
    tagline: "Connected vehicle telemetry, EV charging networks, and smart fleet dashboards",
    description:
      "Engineering modern mobility software for OEMs, fleet operators, and EV charging networks handling high-frequency CAN-bus sensor streams.",
    highlightMetric: "5M+",
    highlightText: "Connected vehicle pings processed per minute",
    capabilities: [
      "Connected Vehicle Telematics Ingestion",
      "OCPP-Compliant EV Charging Station Networks",
      "Fleet Health & Predictive Maintenance AI",
      "In-Vehicle Infotainment HMI Displays",
      "Shared Mobility & Micro-Mobility Dispatch",
    ],
    sampleUseCases: ["EV Fleet Management", "Car Subscription Platforms", "Smart City Traffic Analytics"],
    color: "#ec4899",
  },
];

export const TECH_STACK = [
  { category: "AI & ML", techs: ["PyTorch", "TensorFlow", "OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex", "HuggingFace", "TensorRT", "YOLOv10", "Pinecone", "Milvus", "Weaviate"] },
  { category: "Cloud & Infrastructure", techs: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud (GCP)", "Kubernetes (K8s)", "Docker", "Terraform", "Cloudflare", "Serverless", "Helm", "Datadog"] },
  { category: "Frontend & Mobile", techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Vue.js", "Framer Motion", "Three.js / WebGL"] },
  { category: "Backend & Systems", techs: ["Node.js", "Python", "Go (Golang)", "Java Spring Boot", ".NET Core / C#", "Rust", "FastAPI", "GraphQL", "gRPC", "Apache Kafka"] },
  { category: "Databases & Data", techs: ["PostgreSQL", "Snowflake", "MongoDB", "Redis", "Databricks", "Elasticsearch", "ClickHouse", "dbt", "Apache Spark", "Supabase"] },
  { category: "Enterprise & Microsoft", techs: ["Microsoft 365", "Dynamics 365", "Power Apps", "Azure DevOps", "Salesforce", "SAP Integration", "ServiceNow", "SharePoint"] },
];

export const TESTIMONIALS = [
  {
    quote:
      "CIS operates at a level of speed and technical precision that is rare in global software development. They didn’t just assign developers; they provided an entire engineering mindset that elevated our product architecture and accelerated our market launch by six months.",
    author: "VP of Engineering",
    company: "Tier-1 Telecom / Global Enterprise",
    industry: "Enterprise Telecom",
    verified: "Verified Enterprise Partnership",
  },
  {
    quote:
      "As a venture-backed startup founder, having CIS as our technical partner was the best decision we made. They acted as our technical co-founder, built our AI MVP in 7 weeks, and helped us scale smoothly to our Series A round.",
    author: "Founder & CEO",
    company: "AI FinTech Scaleup (YC & Sequoia-backed)",
    industry: "FinTech & AI",
    verified: "Verified Startup Partner",
  },
  {
    quote:
      "The CMMI Level 5 quality standard is obvious in their delivery discipline. CIS modernized our mission-critical manufacturing inspection line with custom computer vision models that achieved 99.9% defect catch rates.",
    author: "Head of Digital Transformation",
    company: "Global Industrial Manufacturer",
    industry: "Industrial IoT",
    verified: "Verified Industrial Client",
  },
];

export const INSIGHTS_POSTS = [
  {
    id: "agentic-ai-2026",
    category: "AI & Systems",
    readTime: "5 min read",
    date: "October 2026",
    title: "Moving from GenAI Chatbots to Production Agentic Workflows",
    excerpt:
      "Why deterministic tool execution, memory graphs, and self-healing error loops are the true differentiator for enterprise AI in 2026.",
    author: "CIS AI Research Lab",
  },
  {
    id: "startup-cto-playbook",
    category: "Startups & MVP",
    readTime: "6 min read",
    date: "October 2026",
    title: "The Technical Co-Founder Playbook: 0 to Series A Without Technical Debt",
    excerpt:
      "How high-growth startups balance rapid 6-week MVP delivery with modular cloud architectures ready for millions of users.",
    author: "CIS Startup Practice",
  },
  {
    id: "strangler-monolith-modernization",
    category: "Enterprise Tech",
    readTime: "7 min read",
    date: "September 2026",
    title: "Deconstructing the Enterprise Monolith: A Zero-Downtime Blueprint",
    excerpt:
      "Step-by-step strategies for migrating billion-dollar enterprise legacy backends to event-driven microservices safely.",
    author: "CIS Enterprise Architecture Team",
  },
  {
    id: "edge-vision-industrial",
    category: "Edge Computing",
    readTime: "4 min read",
    date: "September 2026",
    title: "Real-Time Computer Vision at the Edge: Lessons from 100M Inference Runs",
    excerpt:
      "Optimizing TensorRT models on embedded edge devices for ultra-low latency manufacturing and automotive telemetry.",
    author: "CIS IoT & Embedded Lab",
  },
];
