import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StarBackground from "@/components/StarBackground";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative">
      <StarBackground />
      <div className="container mx-auto px-4">
        <section id="home" className="flex min-h-[60vh] items-center">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>
    </div>
  );
}
