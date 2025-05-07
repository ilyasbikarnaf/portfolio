"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone, Moon, Sun } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // For theme toggle
  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or use system preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Ilyas Bikarnaf</h2>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <a
                href="#about"
                className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Ilyas Bikarnaf"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              Ilyas Bikarnaf
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
              Frontend Engineer
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/ilyas-bikarnaf-294717330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </button>
              </a>
              <a
                href="https://github.com/ilyasbikarnaf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-110">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </button>
              </a>
              <a href="mailto:ilyas.bikarnaf@gmail.com">
                <button className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-110">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </button>
              </a>
              <a href="tel:0628138605">
                <button className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-110">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </button>
              </a>
            </div>
            <div className="pt-8">
              <a href="#about">
                <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                  Explore My Work
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Front-end developer with expertise in{" "}
                <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">Next.js</span>, and{" "}
                <span className="font-semibold">TailwindCSS</span>, complemented
                by back-end knowledge in{" "}
                <span className="font-semibold">Node.js</span>,{" "}
                <span className="font-semibold">Express.js</span>, and{" "}
                <span className="font-semibold">MongoDB</span>. Passionate about
                crafting responsive, user-friendly web applications with a
                strong foundation in{" "}
                <span className="font-semibold">JavaScript</span> and{" "}
                <span className="font-semibold">TypeScript</span>.
              </p>
              <p>
                Accelerated growth through weekly mentorship sessions with
                professionals from <span className="font-semibold">Google</span>
                , <span className="font-semibold">Meta</span>,{" "}
                <span className="font-semibold">Apple</span>,{" "}
                <span className="font-semibold">LinkedIn</span>, and{" "}
                <span className="font-semibold">Amazon</span>, gaining insights
                into industry best practices and advanced development
                techniques.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor of Science in Computer Science
                  <br />
                  Chouaib Doukkali • Morocco • 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-blue-500 pl-8 ml-4 space-y-12">
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-900"></div>
                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Junior Frontend Engineer
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Thomas King • United Kingdom
                      </p>
                    </div>
                    <span className="mt-2 md:mt-0 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Dec 2024 - Apr 2025
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Developed and maintained reusable UI components using
                      React, TypeScript, and Tailwind CSS, streamlining the
                      development process.
                    </li>
                    <li>
                      Integrated APIs to enable dynamic data flow between
                      frontend and backend systems, supporting new feature
                      implementations.
                    </li>
                    <li>
                      Contributed to improving the responsiveness of the
                      application, enhancing user experience across devices.
                    </li>
                    <li>
                      Assisted in debugging and resolving UI-related issues,
                      ensuring timely and quality releases.
                    </li>
                    <li>
                      Participated in code reviews, adhering to best practices
                      for maintainability and performance.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-900"></div>
                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Full Stack Engineering Intern
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Moxion Power
                      </p>
                    </div>
                    <span className="mt-2 md:mt-0 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Jan 2024 - Jun 2024
                    </span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Assisted in the development of mobile energy storage
                      solutions, contributing to the creation of user interfaces
                      for monitoring and managing battery systems.
                    </li>
                    <li>
                      Collaborated with the backend team to integrate APIs,
                      ensuring seamless data flow between frontend interfaces
                      and battery management systems.
                    </li>
                    <li>
                      Participated in debugging and resolving issues related to
                      frontend and backend interactions, enhancing system
                      reliability.
                    </li>
                    <li>
                      Gained hands-on experience with Agile methodologies,
                      contributing to sprint planning and timely feature
                      deliveries.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <ProjectCard
              title="FocusFlow"
              description="Next.js, MongoDB, TypeScript"
              imageUrl="/placeholder.svg?height=192&width=384"
              liveUrl="https://focus-flow-sable.vercel.app"
              points={[
                "Built a full-stack CRUD app to manage user data, integrating MongoDB with Mongoose for efficient database operations.",
                "Implemented secure user authentication using Clerk, form validation with React Hook Form and Zod.",
                "Deployed on Vercel with analytics, achieving 95% uptime and supporting 50+ concurrent users in testing.",
              ]}
            />

            <ProjectCard
              title="WorldRanks"
              description="Next.js, React"
              imageUrl="/placeholder.svg?height=192&width=384"
              liveUrl="https://world-ranks-nine-orcin.vercel.app"
              points={[
                "Developed an app to fetch and display data from a third-party API, using React for a responsive UI.",
                "Used Context API to avoid multiple refetches, increasing app speed by 30%.",
                "Optimized performance with Next.js caching, reducing load times by 25%.",
              ]}
            />

            <ProjectCard
              title="GrindFlow"
              description="Node.js, Discord.js"
              imageUrl="/placeholder.svg?height=192&width=384"
              codeUrl="https://github.com/ilyasbikarnaf/grindflow"
              points={[
                "Developed a customizable Discord bot for my community of upcoming software engineers.",
                "Used Discord.js for API interactions and Cron for flexible scheduling.",
                "Deployed on Railway, with UptimeBot pinging every 5 minutes to maintain 99% uptime.",
              ]}
            />

            <ProjectCard
              title="Google Calendar Clone"
              description="React, TypeScript, CSS"
              imageUrl="/placeholder.svg?height=192&width=384"
              codeUrl="https://github.com/ilyasbikarnaf/Projects/tree/main/google-calendar-clone"
              points={[
                "Developed a calendar app with React and TypeScript, featuring month navigation and event management.",
                "Used LocalStorage for event persistence and date-fns for date handling.",
                'Implemented overflow handling with a "+X More" modal for excess events.',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "TailwindCSS",
                    "Framer Motion",
                    "React Hook Form",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Mongoose",
                    "Prisma",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Tools & Deployment</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "Vercel",
                  "Railway",
                  "REST APIs",
                  "Agile Methodology",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll get back to you!
            </p>
            <div className="flex flex-col space-y-4">
              <a href="mailto:ilyas.bikarnaf@gmail.com">
                <button className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4" /> ilyas.bikarnaf@gmail.com
                </button>
              </a>
              <a
                href="https://linkedin.com/in/ilyas-bikarnaf-294717330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors flex items-center justify-center">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="container px-4 md:px-6 mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Ilyas Bikarnaf. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  title,
  description,
  imageUrl,
  liveUrl,
  codeUrl,
  points,
}: {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
  points: string[];
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={384}
          height={192}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {description}
            </p>
          </div>
          <div className="flex gap-2">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                  Live
                </button>
              </a>
            )}
            {codeUrl && (
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  Code
                </button>
              </a>
            )}
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
