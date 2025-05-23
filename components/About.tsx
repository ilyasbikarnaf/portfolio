"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ProfilePhoto from "@/public/profilePhoto.jpg";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Framer Motion",
  "React Hook Form",
  "Zod",
  "Prisma",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col items-center gap-12 p-12 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex w-full justify-center md:w-1/3"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 md:h-80 md:w-80">
            <Image
              src={ProfilePhoto}
              alt="Ilyas Bikarnaf"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-2/3"
        >
          <div className="space-y-4 text-muted-foreground">
            <p>
              I’m Ilyas, a Junior Frontend Engineer with a passion for building
              responsive, user-friendly web applications. I specialize in React,
              Next.js, and Tailwind CSS, and I also have foundational experience
              with back-end technologies like Node.js, Express.js, and MongoDB.
              My strong understanding of JavaScript and TypeScript allows me to
              create scalable, maintainable code.
            </p>

            <p>
              In addition to hands-on project experience, I accelerate my growth
              through weekly mentorship sessions with industry professionals
              from top tech companies like Google, Meta, Apple, LinkedIn, and
              Amazon. These sessions provide me with valuable insights into best
              practices, advanced development techniques, and the latest
              industry trends, which I actively apply to my work.
            </p>

            <p>
              I’m constantly striving to improve my skills, both technically and
              professionally, as I continue to build my career in web
              development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
