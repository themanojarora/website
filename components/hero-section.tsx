"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Navigating the Future of Finance with <span className="text-blue-600">AI-Driven Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground">Manager at SEBI</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              With 7+ years of experience in regulatory policymaking, technology adoption and banking, I specialize in leveraging AI and automation to enhance financial supervision. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToAbout} className="bg-blue-600 hover:bg-blue-700">
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:manoja@sebi.gov.in">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/themanojarora" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/themanojarora" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
