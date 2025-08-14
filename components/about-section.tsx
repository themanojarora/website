import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A data and technology enthusiast with extensive experience in capital markets regulation, specializing in
            AI-driven solutions for financial supervision and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">
                MBA in Data Science (ongoing), Diploma in International Banking & Finance, B.E. in Electrical
                Engineering
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recognition</h3>
              <p className="text-muted-foreground">
                Winner of SEBI's inaugural Code-a-thon 2024, presented at IOSCO APRC Meeting and SMART 2025 symposium
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <p className="text-muted-foreground">
                English, Hindi, Gujarati (Proficient), Malayalam (Intermediate), Spanish (Beginner)
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Career Objective</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Data and technology enthusiast and experienced capital markets regulator with 6+ years at SEBI – experienced
            in building end-to-end data pipelines for data extraction, cleaning, and visualization – to support market
            supervision, risk assessment, and regulatory reporting. Skilled in oversight, administration and business
            approvals, and policy formulation of Credit Rating Agencies, ESG Rating Providers, and pooled investment
            vehicles such as REITs and InvITs. Eager to apply data-driven insights to strengthen regulatory
            decision-making and enhance supervisory effectiveness across capital markets.
          </p>
        </div>
      </div>
    </section>
  )
}
