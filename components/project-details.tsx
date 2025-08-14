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

      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-blue-600/10 rounded-lg text-blue-600">{project.icon}</div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <CardTitle className="text-xl ms-5 mt-3">{project.title}</CardTitle>
              </a>
            ) : (
              <CardTitle className="text-xl ms-5 mt-3">{project.title}</CardTitle>
            )}
          </div>
          <p className="text-slate-600 leading-relaxed">{project.description}</p>
        </div>

        {project.screenshot && project.screenshot !== "nope.jpg" && (
          <div className="rounded-lg overflow-hidden border">
            <img
              src={`/${project.screenshot}`}
              alt={project.title}
              className="w-full h-[260px] object-cover"
            />
          </div>
        )}

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-slate-700">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag: string, i: number) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
