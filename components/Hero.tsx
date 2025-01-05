import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 text-center text-white">
      <h1 className="text-5xl font-bold mb-4 animate-slide-in-left">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8 animate-slide-in-right animation-delay-200">
        Mobile App Developer | Web Designer | Off-road Enthusiast
      </p>
      <Button asChild className="animate-bounce animation-delay-500">
        <Link href="#projects">
          View My Work <ArrowDownIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  )
}

