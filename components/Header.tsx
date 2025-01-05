import { Button } from "@/components/ui/button"
import { SmartphoneIcon as MobileIcon, MonitorIcon, UserIcon, PenToolIcon } from 'lucide-react'
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">YourName</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" asChild>
                <Link href="#projects">
                  <MobileIcon className="mr-2 h-4 w-4" /> Projects
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="#about">
                  <UserIcon className="mr-2 h-4 w-4" /> About Me
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="#blogs">
                  <PenToolIcon className="mr-2 h-4 w-4" /> Blogs
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

