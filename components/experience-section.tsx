import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Manager, Technology and Data Analytics division",
      company: "Securities and Exchange Board of India (SEBI)",
      location: "Mumbai, India",
      period: "May 2019 - Present",
      description: [
        "Currently working on various projects to check compliance of listed companies against regulatory requirements, analyse and visualize sustainability disclosures by listed companies for insights and automating various internal processes at SEBI.",
        "Built AI tools for automation of IPO document review, news analysis, business application processing, and detection of investment advice on social media — to enhance efficiency and reduce processing timelines.",
        "Contributed to the IOSCO APRC Working Group's internal report on RegTech and SupTech.",
        "Gathered, analysed, and reported data on debt instruments and pooled investment vehicles on a regular basis.",
        "Worked on formulating guidelines for rights issue of units by REITs, unitholder requirements, expanding definition of green debt securities and introducing ASBA technology in the debt market IPOs for reducing listing timelines.",
        "Managed registration, approvals, fundraising applications, and supervision of asset monetization vehicles (REITs and InvITs).",
        "Worked closely with the Reserve Bank of India (India's central bank), Ministry of Finance and other stakeholders on data sharing and debt market reforms.",
      ],
    },
    {
      title: "Assistant Manager",
      company: "State Bank of India",
      location: "Kerala, India",
      period: "Dec 2017 - Apr 2019",
      description: [
        "Managed credit appraisal and operational compliance for loan portfolios using data-backed Risk Models.",
        "Conducted risk assessments and evaluated borrower viability through data-driven analysis of financial statements, business models, and repayment capacity.",
        "Promoted digital banking adoption, including internet banking, mobile Apps and EMV cards, enhancing financial inclusion in underbanked regions.",
        "Led financial literacy workshops at colleges and community centers in rural India.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 6 years of experience in regulatory data analytics, financial supervision, and AI-driven automation in
            the capital markets sector.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    {index === 0 ? "Current" : "Previous"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
