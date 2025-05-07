"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-[800px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl font-bold md:text-6xl"
        >
          Hi, I&apos;m <span className="text-primary">Ilyas</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg font-medium text-muted-foreground md:text-xl"
        >
          Junior Frontend Engineer | React, Next.js, Tailwind CSS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl text-lg text-muted-foreground"
        >
          I specialize in building responsive, user-friendly interfaces using
          React, Next.js, and Tailwind CSS. I’m passionate about creating clean,
          maintainable code and continuously improving my skills in front-end
          development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button asChild>
            <Link href="/#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" download>
              Download Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex space-x-4 pt-4"
        >
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/ilyasbikarnaf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/ilyas-bikarnaf-294717330"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:ilyas.bikarnaf@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
