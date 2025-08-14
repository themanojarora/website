import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Code, Shield, Award } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Data Analytics",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL & Data Mining", level: 95 },
        { name: "Machine Learning", level: 85 },
        { name: "LLMs & AI Automation", level: 90 },
      ],
    },
    {
      title: "Regulatory Technology",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Regulatory Data Analytics", level: 95 },
        { name: "Compliance Automation", level: 90 },
        { name: "Risk Assessment", level: 85 },
        { name: "Policy Formulation", level: 80 },
      ],
    },
    {
      title: "Technical Skills",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "Power BI & Tableau", level: 85 },
        { name: "Web Scraping & APIs", level: 90 },
        { name: "Database Design", level: 85 },
      ],
    },
  ]

  const certifications = [
    "World Quant University - Applied Data Science Lab (2025)",
    "IBM Data Analyst Specialization (2023)",
    "Databases and SQL for Data Science with Python (IBM)",
    "Fundamentals of Visualization with Tableau (UC Davis)",
    "Power BI & Power Virtual Agents (Microsoft)",
    "Microsoft Power Platform Fundamentals (PL-900)",
    "Fundamentals of Data Governance (Edureka)",
    "FinTech: Foundations, Payments, and Regulations (UPenn)",
    "Global Financial Markets and Instruments (Rice University)",
    "Regulatory Landscape of Alternative Investments (UIUC)",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning AI, data analytics, regulatory technology, and financial supervision with
            extensive certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">
                <Award className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="p-3 text-sm justify-start">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
