import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BikeIcon as MotorcycleIcon, CodeIcon } from 'lucide-react'

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-400 to-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white bg-opacity-20 backdrop-blur-lg text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <CodeIcon className="mr-2 h-6 w-6" />
                Professional Life
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                I'm a passionate mobile app developer and web designer with X years of experience.
                I love creating intuitive and beautiful user interfaces that solve real-world problems.
                My expertise includes React Native, React.js, and Next.js, allowing me to build
                seamless experiences across mobile and web platforms.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white bg-opacity-20 backdrop-blur-lg text-white">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MotorcycleIcon className="mr-2 h-6 w-6" />
                Off-road Enthusiast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                When I'm not coding, you can find me riding my bike on challenging off-road trails.
                This hobby keeps me energized and helps me approach problem-solving with a fresh perspective.
                The thrill of conquering difficult terrains mirrors my approach to tackling complex coding challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

