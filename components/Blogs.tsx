'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CalendarIcon, ClockIcon } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  readTime: string
  content: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Mobile App Development",
    description: "Exploring emerging trends in the mobile app industry",
    date: "2023-05-15",
    readTime: "5 min read",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    title: "Optimizing React Performance",
    description: "Tips and tricks for building faster React applications",
    date: "2023-06-02",
    readTime: "8 min read",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "The Art of UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces",
    date: "2023-06-20",
    readTime: "6 min read",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
]

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)

  return (
    <section id="blogs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">My Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="cursor-pointer transition-all hover:scale-105" 
              onClick={() => setSelectedBlog(post)}
            >
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <ClockIcon className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {typeof window !== 'undefined' && (
        <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedBlog?.title}</DialogTitle>
              <DialogDescription>{selectedBlog?.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-sm text-gray-500">{selectedBlog?.content}</p>
            </div>
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span className="flex items-center">
                <CalendarIcon className="mr-1 h-4 w-4" />
                {selectedBlog?.date}
              </span>
              <span className="flex items-center">
                <ClockIcon className="mr-1 h-4 w-4" />
                {selectedBlog?.readTime}
              </span>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

