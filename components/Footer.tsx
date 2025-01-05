import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2023 YourName. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              <TwitterIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

