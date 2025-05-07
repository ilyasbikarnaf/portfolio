import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StarBackground from "@/components/StarBackground";

export default function Home() {
  return (
    <div className="relative">
      <StarBackground />
      <div className="container z-20 mx-auto px-4 *:ml-5">
        <section
          id="home"
          className="flex min-h-[70vh] max-w-2xl items-center"
        >
          <Hero />
        </section>

        <section id="about" className="w-full py-20">
          <About />
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
