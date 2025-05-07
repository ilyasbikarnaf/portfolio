import About from "@/components/About"
import StarBackground from "@/components/StarBackground"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <div className="container mx-auto px-4 py-20">
        <About />
      </div>
    </div>
  )
}
