"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import clariCash from "@/public/clariCash.png";
import worldRanks from "@/public/worldRanks.png";
import focusFlow from "@/public/focusFlow.png";
import DiscordImage from "@/public/discord.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "FocusFlow",
    description:
      "A full-stack CRUD app to manage user data, integrating MongoDB with Mongoose for efficient database operations.",
    image: focusFlow,
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Clerk",
      "React Hook Form",
      "Zod",
      "MongoDB",
      "Mongoose",
      "React Toastify",
    ],
    github: "https://github.com/ilyasbikarnaf/FocusFlow",
    demo: "https://focus-flow-sable.vercel.app",
  },
  {
    id: 2,
    title: "WorldRanks",
    description:
      "An app to fetch and display data from a third-party API, using React for a responsive UI and Context API to avoid multiple refetches.",
    image: worldRanks,
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "React Toastify",
      "Context API",
    ],
    github: "https://github.com/ilyasbikarnaf/world-ranks",
    demo: "https://world-ranks-nine-orcin.vercel.app",
  },
  {
    id: 3,
    title: "ClariCash",
    description:
      "ClariCash is a simple personal finance tracker that lets you add and remove incomes and expenses, view daily and lifetime summaries in interactive charts, and analyze your spending in 3-hour time chunks. You can click on any day to manage transactions and instantly see the financial breakdown.",
    image: clariCash,
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "React Query",
      "React Hook Form",
      "Zod",
      "Chart.js",
      "JWT",
      "bcrypt",
    ],
    github: "https://github.com/ilyasbikarnaf/ClariCash",
    demo: "https://clari-cash-fpj7.vercel.app/",
  },
  {
    id: 4,
    title: "GrindFlow",
    description:
      "A flexible Discord bot that automatically sends scheduled daily messages to your chosen channel. Perfect for daily coding challenges, quotes, reminders, journaling prompts, or team standups. Fully customizable and easy to set up for any daily automation task.",
    image: DiscordImage,
    tags: ["TypeScript", "Node.js", "Discord.js", "Cron", "nodemon"],
    github: "https://github.com/ilyasbikarnaf/grindflow",
    // demo: "https://portoliodemo.vercel.app/",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
