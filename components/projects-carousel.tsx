"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowLeft, FileText, Shield, Video, Database, Workflow } from "lucide-react"

interface ProjectsCarouselProps {
  onBack: () => void
}

export function ProjectsCarousel({ onBack }: ProjectsCarouselProps) {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "AI-Powered IPO Document Analysis",
      icon: <FileText className="h-6 w-6" />,
      description:
        "Automated due diligence system for IPO offer documents using LLMs to check against past irregularities and generate processing notes.",
      features: [
        "LLM-based document analysis",
        "News source integration",
        "Automated processing notes",
        "Reduced analysis timelines",
      ],
      tags: ["AI", "LLM", "Document Processing", "Automation"],
    },
    {
      title: "Business Process Automation",
      icon: <Workflow className="h-6 w-6" />,
      description:
        "Automated processing system for significant stake acquisition applications with web scraping and compliance checking.",
      features: [
        "API-based web scraping",
        "Python & JavaScript analysis",
        "Automated note generation",
        "Reduced processing time",
      ],
      tags: ["Automation", "Web Scraping", "Python", "JavaScript"],
    },
    {
      title: "AI Offsite Supervision System",
      icon: <Shield className="h-6 w-6" />,
      description:
        "Multi-exchange monitoring system using LLMs for regulatory compliance checking of listed companies.",
      features: [
        "Multi-exchange integration",
        "LLM disclosure analysis",
        "Cross-department usage",
        "Real-time monitoring",
      ],
      tags: ["AI", "Compliance", "LLM", "Monitoring"],
    },
    {
      title: "Video Content Analysis Tool",
      icon: <Video className="h-6 w-6" />,
      description:
        "AI system analyzing online videos to detect improper investment advice and SEBI guideline violations.",
      features: ["Transcript analysis", "Video metrics analysis", "Thumbnail content check", "Violation detection"],
      tags: ["AI", "Video Analysis", "Compliance", "Detection"],
    },
    {
      title: "SQL Database Systems",
      icon: <Database className="h-6 w-6" />,
      description: "Database design for SEBI inspection workflows and ESG Rating Provider registration systems.",
      features: ["Inspection automation", "ESG registration system", "Process digitization", "Workflow optimization"],
      tags: ["SQL", "Database Design", "Workflow", "ESG"],
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
          </div>

          <CardTitle className="text-xl">{project.title}</CardTitle>

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
