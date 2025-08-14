"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/components/projects-data" // (see section 4)

interface ProjectsGridProps {
  onBack: () => void
  onOpenDetails: (index: number) => void
}

export function ProjectsGrid({ onBack, onOpenDetails }: ProjectsGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h2 className="text-xl font-semibold text-slate-800">Projects</h2>
        <div />
      </div>

      {/* 4 columns × 2 rows on lg+, responsive below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.slice(0, 8).map((p, idx) => (
          <ProjectGridCard
            key={idx}
            project={p}
            index={idx}
            onClick={() => onOpenDetails(idx)}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectGridCard({
  project,
  index,
  onClick,
}: {
  project: any
  index: number
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const timerRef = useRef<number | null>(null)

  const isBlankShot = useMemo(() => project.screenshot === "nope.jpg", [project.screenshot])

  // Randomly flip between title and screenshot every 3–7 seconds
  useEffect(() => {
    function schedule() {
      const delay = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000
      timerRef.current = window.setTimeout(() => {
        // Only flip if not hovered and screenshot is not blank
        if (!hovered && !isBlankShot) {
          setShowImage((prev) => !prev)
        }
        schedule()
      }, delay)
    }
    schedule()
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [hovered, isBlankShot])

  // On hover, force text mode
  useEffect(() => {
    if (hovered) setShowImage(false)
  }, [hovered])

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter") onClick() }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl"
      style={{ height: 220 }}
    >
      {/* Screenshot layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${showImage && !hovered && !isBlankShot ? "opacity-100" : "opacity-0"}`}
      >
        <img
          src={`/${project.screenshot}`}
          alt={project.title}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* subtle gradient for readability when image is visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Content layer (title-centric) */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <div className="text-center space-y-2">
          <div className="mx-auto mb-2 flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/10 text-blue-600">
            {project.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 max-w-xs mx-auto">
            {project.description}
          </p>
        </div>
      </div>

      {/* Click hint */}
      <div className="absolute bottom-2 right-2 text-[11px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
        Click to view details
      </div>
    </Card>
  )
}
