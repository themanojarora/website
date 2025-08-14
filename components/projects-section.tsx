import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Video, Database, Workflow } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Processing of voluminous Offer Documents using AI",
      icon: <FileText className="h-6 w-6" />,
      description:
        "Developed a project to automate due diligence for offer documents for fundraising. Draft Red Herring Prospectuses filed with SEBI for IPOs are checked against irregularities observed in past documents using LLMs.",
      features: [
        "Automated document analysis using LLMs",
        "News source integration for litigation information",
        "Automated generation of internal processing notes",
        "Reduced timelines for analyzing DRHPs",
      ],
      tags: ["AI", "LLM", "Document Processing", "Automation"],
    },
    {
      title: "Business Process Automation Tools",
      icon: <Workflow className="h-6 w-6" />,
      description:
        "Developed a project for automating the processing of applications submitted by Acquirers of significant stake in listed companies to ensure compliance with regulatory requirements.",
      features: [
        "Web scraping through APIs for data extraction",
        "Python and JavaScript analysis tools",
        "Automated internal processing notes generation",
        "Significantly reduced processing time",
      ],
      tags: ["Automation", "Web Scraping", "Python", "JavaScript"],
    },
    {
      title: "AI for Offsite Supervision of listed entities",
      icon: <Shield className="h-6 w-6" />,
      description:
        "Developed a project for offsite monitoring and regulatory compliance checking of listed companies across multiple exchanges by pulling disclosure data and querying such disclosures using LLMs.",
      features: [
        "Multi-exchange data integration",
        "LLM-powered disclosure analysis",
        "Extended to debt-listed entities",
        "Used by other SEBI departments",
      ],
      tags: ["AI", "Compliance", "LLM", "Monitoring"],
    },
    {
      title: "Analysing online videos",
      icon: <Video className="h-6 w-6" />,
      description:
        "Developed a project that analyses videos on online platforms using transcript, video statistics, thumbnail, etc. to detect if they contain improper investment advice or violate SEBI guidelines.",
      features: [
        "Video transcript analysis",
        "Statistical analysis of video metrics",
        "Thumbnail content analysis",
        "Investment advice violation detection",
      ],
      tags: ["AI", "Video Analysis", "Compliance", "Detection"],
    },
    {
      title: "SQL Database Design",
      icon: <Database className="h-6 w-6" />,
      description:
        "Designed SQL databases for digitization and workflow automation for inspections conducted by SEBI, and for application registration of ESG Rating Providers.",
      features: [
        "Inspection workflow automation",
        "ESG Rating Provider registration system",
        "Digitization of manual processes",
        "Streamlined application processing",
      ],
      tags: ["SQL", "Database Design", "Workflow", "ESG"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative AI and automation solutions that have transformed regulatory processes and enhanced supervisory
            effectiveness at SEBI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {project.icon}
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
