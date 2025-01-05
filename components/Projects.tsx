'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SmartphoneIcon as MobileIcon, MonitorIcon } from 'lucide-react'
import ProjectModal, { ProjectDetails } from './ProjectModal'

const projects: ProjectDetails[] = [
  { 
    id: 1,
    title: "Mobile App 1", 
    description: "A brief description of Mobile App 1", 
    type: "mobile",
    fullDescription: "Mobile App 1 is an innovative solution for managing daily tasks. It features a clean, intuitive interface and powerful organization tools to boost productivity.",
    previewImage: "/placeholder.svg?height=300&width=400",
    liveLink: "https://app-store-link.com",
    githubLink: "https://github.com/yourusername/mobile-app-1"
  },
  { 
    id: 2,
    title: "Website 1", 
    description: "A brief description of Website 1", 
    type: "web",
    fullDescription: "Website 1 is a modern e-commerce platform built with React and Next.js. It offers a seamless shopping experience with fast page loads and server-side rendering.",
    previewImage: "/placeholder.svg?height=300&width=400",
    liveLink: "https://website1.com",
    githubLink: "https://github.com/yourusername/website-1"
  },
  { 
    id: 3,
    title: "Mobile App 2", 
    description: "A brief description of Mobile App 2", 
    type: "mobile",
    fullDescription: "Mobile App 2 is a fitness tracking application that helps users monitor their workouts, nutrition, and progress. It integrates with various wearable devices for comprehensive health insights.",
    previewImage: "/placeholder.svg?height=300&width=400",
    liveLink: "https://play-store-link.com",
    githubLink: "https://github.com/yourusername/mobile-app-2"
  },
  { 
    id: 4,
    title: "Website 2", 
    description: "A brief description of Website 2", 
    type: "web",
    fullDescription: "Website 2 is a portfolio site for a photography studio. It showcases their work with a beautiful, responsive gallery and includes a booking system for client sessions.",
    previewImage: "/placeholder.svg?height=300&width=400",
    liveLink: "https://website2.com",
    githubLink: "https://github.com/yourusername/website-2"
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="cursor-pointer transition-all hover:scale-105" 
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  {project.type === "mobile" ? (
                    <MobileIcon className="mr-2 h-5 w-5 text-orange-500" />
                  ) : (
                    <MonitorIcon className="mr-2 h-5 w-5 text-green-500" />
                  )}
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {typeof window !== 'undefined' && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}

