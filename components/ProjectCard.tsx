"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Project } from "./Projects";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="flex min-h-[400px] flex-col gap-6 overflow-hidden hover:cursor-pointer">
        <div className="relative h-48 w-full overflow-hidden md:h-64">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        <CardContent className="flex-grow pt-6 md:h-[400px] lg:h-[300px]">
          <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
          <p className="mb-4 text-muted-foreground">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="px-2 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between pb-4 pt-2">
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>

          <Button
            size="sm"
            className={cn(
              project.title === "GrindFlow" &&
                "opacity-30 hover:cursor-not-allowed "
            )}
            asChild
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
