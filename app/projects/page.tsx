import Projects from "@/components/Projects"
import StarBackground from "@/components/StarBackground"

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <div className="container mx-auto px-4 py-20">
        <Projects />
      </div>
    </div>
  )
}
