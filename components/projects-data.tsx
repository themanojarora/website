import { BarChart2, PieChart, FileText, Workflow, Video, Database, Shield } from "lucide-react"

export const projects = [
  {
    title: "Investment Funds Statistics Dashboard",
    icon: <BarChart2 className="h-6 w-6" />,
    description:
      "Plotly Dash dashboard showcasing 2024 hedge fund metrics across jurisdictions, including NAV, leverage ratios, asset exposure, and strategy breakdowns.",
    features: [
      "Built with Plotly Dash for interactive data visualization",
      "Jurisdiction-level fund comparisons and filtering",
      "Dynamic charts for NAV, leverage, and asset class exposure",
      "Strategy-wise breakdowns of investment approaches",
    ],
    tags: ["Finance", "Plotly Dash", "Data Visualization", "Analytics"],
    link: "https://investment-funds-statistics-dashboard-1.onrender.com/",
    screenshot: "iosco.png",
  },
  {
    title: "BRSR Data Visualization Dashboard",
    icon: <PieChart className="h-6 w-6" />,
    description:
      "Interactive Tableau dashboard visualizing Business Responsibility and Sustainability Reporting (BRSR) disclosures across Indian companies, highlighting ESG metrics, compliance trends, and sectoral benchmarks.",
    features: [
      "Company-wise ESG metric comparison",
      "Sectoral breakdowns of sustainability disclosures",
      "Interactive filters for granular analysis",
      "Visual benchmarks for BRSR compliance",
    ],
    tags: ["ESG", "Sustainability", "Data Visualization", "Tableau"],
    link: "https://public.tableau.com/app/profile/themanojarora/viz/brsr/Overview",
    screenshot: "brsr.png",
  },
  {
    title: "AI-Powered IPO Document Analysis",
    icon: <FileText className="h-6 w-6" />,
    description:
      "An automated due diligence system that leverages LLMs to analyze Draft Red Herring Prospectuses filed with SEBI, flag historical irregularities, and generate structured processing notes for IPO evaluation.",
    features: [
      "LLM-based document analysis",
      "News source integration",
      "Automated processing notes",
      "Reduced analysis timelines",
    ],
    tags: ["AI", "LLM", "Document Processing", "Automation"],
    link: "",
    screenshot: "drhp.png",
  },
  {
    title: "Company Profile Data Extractor",
    icon: <FileText className="h-6 w-6" />,
    description:
      "An intelligent web scraper that extracts information about listed companies from reliable online sources such as stock exchanges. Also, from Screener. Data includes basic info, market trading prices, charts, financial info, shareholding patterns, screener ratio analyses, etc.",
    features: [
      "Automated data extraction from official stock exchange sources",
      "Integration with Screener and other reliable financial platforms",
      "Collection of market prices, charts, and financial statements",
      "Shareholding pattern and ratio analysis from trusted data sources",
    ],
    tags: ["Web Scraping", "Financial Data", "Stock Market", "Automation", "Data Extraction", "Company Profiles", "Market Analysis"],
    link: "",
    screenshot: "profile.png",
  },
  {
    title: "Business Process Automation for Company Takeovers",
    icon: <Workflow className="h-6 w-6" />,
    description:
      "Automated processing system for significant stake acquisition applications with web scraping and compliance checking.",
    features: [
      "API-based web scraping",
      "Python-based compliance checking of applications",
      "Automated note generation",
      "Reduced processing time",
    ],
    tags: ["Automation", "Web Scraping", "Python", "JavaScript"],
    link: "",
    screenshot: "nope.jpg",
  },
  {
    title: "Detecting Unregistered Investment Advice in Social Media videos",
    icon: <Video className="h-6 w-6" />,
    description:
      "AI system analyzing online videos to detect improper investment advice and SEBI guideline violations. Details of videos including thumbnails, transcripts, screengrabs, description and comments are analysed using LLMs to ensure videos don't violate SEBI guidelines for Investment Advisors.",
    features: ["Transcript analysis", "Video metrics analysis", "Thumbnail content check", "Violation detection"],
    tags: ["AI", "Video Analysis", "Compliance", "Detection"],
    link: "",
    screenshot: "nope.jpg",
  },
  {
    title: "Offsite Supervision of listed companies",
    icon: <Shield className="h-6 w-6" />,
    description:
      "Multi-exchange monitoring system for verifying compliance of disclosures made by listed companies on stock exchanges. Data pulled from exchanges using APIs, and disclosures analysed using LLMs to ensure offsite supervision of listed companies.",
    features: [
      "Multi-exchange integration",
      "LLM-based analysis of disclosure documents",
      "Cross-department usage",
      "Real-time monitoring",
    ],
    tags: ["AI", "Compliance", "LLM", "Monitoring"],
    link: "",
    screenshot: "nope.jpg",
  },
  {
    title: "SQL Database Projects",
    icon: <Database className="h-6 w-6" />,
    description:
      "Database design for SEBI inspection workflows and ESG Rating Provider registration systems.",
    features: ["Inspection automation", "ESG registration system", "Process digitization", "Workflow optimization"],
    tags: ["SQL", "Database Design", "Workflow", "ESG"],
    link: "",
    screenshot: "nope.jpg",
  },
]
