"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, Download, MapPin, Phone } from "lucide-react"
import { ProjectsCarousel } from "@/components/projects-carousel"

export function MinimalPortfolio() {
  const [showProjects, setShowProjects] = useState(false)

  const handleResumeDownload = () => {
    // Create a simple PDF content for the resume
    window.open("resume.pdf", "_blank")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-2xl">
        {!showProjects ? (
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <img
                  src="/indian-businessman-headshot.jpg"
                  alt="Manoj Arora"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-slate-900">Manoj Arora</h1>
                <p className="text-lg text-slate-600 font-medium">Manager, SEBI</p>
                <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                  Data and technology enthusiast with 6+ years at SEBI, specializing in AI-driven regulatory solutions
                  and market supervision.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <a href="mailto:manoja@example.com" className="flex items-center gap-1 text-blue-600 hover:underline">
                  <Mail className="h-4 w-4" />
                  <span>manojarorawrites@gmail.com</span>
                  </a>
                </div>


                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, India</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">AI & Automation</Badge>
                <Badge variant="secondary">Data Analytics</Badge>
                <Badge variant="secondary">Python & SQL</Badge>
                <Badge variant="secondary">Regulatory Tech</Badge>
              </div>

              <div className="flex gap-4 justify-center pt-4">
                <Button onClick={() => setShowProjects(true)} className="bg-blue-600 hover:bg-blue-700 px-8">
                  Projects
                </Button>
                <Button variant="outline" onClick={handleResumeDownload} className="px-8 bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/themanojarora" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/themanojarora" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <ProjectsCarousel onBack={() => setShowProjects(false)} />
        )}
      </div>
    </div>
  )
}
