"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowLeft, FileText, Shield, Video, Database, Workflow, BarChart2, PieChart } from "lucide-react"

interface ProjectsCarouselProps {
  onBack: () => void
}

export function ProjectsCarousel({ onBack }: ProjectsCarouselProps) {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
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
      screenshot: "/iosco.png"
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
      screenshot: "brsr.png"
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
      screenshot: "drhp.png"
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
        "Shareholding pattern and ratio analysis from trusted data sources"
      ],
      tags: ["Web Scraping", "Financial Data", "Stock Market", "Automation", "Data Extraction", "Company Profiles", "Market Analysis"],
      link: "",
      screenshot: "profile.jpg"
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
      screenshot: "nope.jpg"
    },
    {
      title: "Detecting Unregistered Investment Advice in Social Media videos",
      icon: <Video className="h-6 w-6" />,
      description:
        "AI system analyzing online videos to detect improper investment advice and SEBI guideline violations. Details of videos including thumbnails, transcripts, screengrabs, description and comments are analysed using LLMs to ensure videos don't violate SEBI guidelines for Investment Advisors.",
      features: ["Transcript analysis", "Video metrics analysis", "Thumbnail content check", "Violation detection"],
      tags: ["AI", "Video Analysis", "Compliance", "Detection"],
      link: "",
      screenshot: "nope.jpg"
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
      screenshot: "nope.jpg"
    },
    
    {
      title: "SQL Database Projects",
      icon: <Database className="h-6 w-6" />,
      description: "Database design for SEBI inspection workflows and ESG Rating Provider registration systems.",
      features: ["Inspection automation", "ESG registration system", "Process digitization", "Workflow optimization"],
      tags: ["SQL", "Database Design", "Workflow", "ESG"],
      link: "",
      screenshot: "nope.jpg"
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]

  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="text-sm text-slate-500">
            {currentProject + 1} of {projects.length}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-blue-600/10 rounded-lg text-blue-600">{project.icon}</div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <CardTitle className="text-xl ms-5 mt-3">{project.title}</CardTitle>
            </a>
          </div>

          

          <p className="text-slate-600 leading-relaxed">{project.description}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-slate-700">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button variant="outline" size="sm" onClick={prevProject}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentProject ? "bg-blue-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          <Button variant="outline" size="sm" onClick={nextProject}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
