'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import Image from 'next/image'

export interface ProjectDetails {
  id: number
  title: string
  description: string
  type: 'mobile' | 'web'
  fullDescription: string
  previewImage: string
  liveLink?: string
  githubLink?: string
}

interface ProjectModalProps {
  project: ProjectDetails | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={project.previewImage}
            alt={`Preview of ${project.title}`}
            width={400}
            height={300}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <p className="mt-4 text-sm text-gray-500">{project.fullDescription}</p>
        <div className="mt-4 flex justify-end space-x-2">
          {project.liveLink && (
            <Button asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                View Live
              </a>
            </Button>
          )}
          {project.githubLink && (
            <Button variant="outline" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

