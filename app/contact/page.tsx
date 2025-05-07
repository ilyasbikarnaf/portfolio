import Contact from "@/components/Contact"
import StarBackground from "@/components/StarBackground"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <div className="container mx-auto px-4 py-20">
        <Contact />
      </div>
    </div>
  )
}
