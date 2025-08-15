"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/components/projects-data"

export function ProjectDetails({
  index,
  onBack,
}: {
  index: number
  onBack: () => void
}) {
  const project = projects[index]

  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="text-sm text-slate-500">
            {index + 1} of {projects.length}
          </div>
        </div>
      </CardHeader>

      {/* GRID */}
      <CardContent className="relative grid gap-8 md:grid-cols-12">
        {/* Title row — spans both */}
        <div className="md:col-span-12 text-center space-y-3">
          <div className="flex justify-center items-center">
            <div className="p-3 bg-blue-600/10 rounded-lg text-blue-600">
              {project.icon}
            </div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="ms-5">
                <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
              </a>
            ) : (
              <CardTitle className="text-xl md:text-2xl ms-5">{project.title}</CardTitle>
            )}
          </div>
          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Left column */}
        <div className="md:col-span-6 space-y-6 z-10">
          <div className="space-y-3" style={{"width":"250px"}}>
            <h4 className="font-semibold text-sm text-slate-700">Key Features:</h4>
            <ul className="space-y-2">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, i: number) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right column — screenshot, deliberately overflowing */}
        {project.screenshot && project.screenshot !== "nope.jpg" && (
          <div className="md:col-span-6 relative min-h-[280px] md:min-h-[520px]">
            <img
              src={`/${project.screenshot}`}
              alt={project.title}
              aria-hidden="true"
              className="
                pointer-events-none select-none
                absolute
                right-[-6rem] md:right-[-8rem]   /* overflow horizontally */
                bottom-[-4rem]                  /* overflow vertically */
                md:top-[-2rem]
                max-w-none
                h-[280px] md:h-[560px]          /* taller than column */
                w-auto
                object-cover
                rounded-xl
                shadow-xl ring-1 ring-black/5
              "
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
