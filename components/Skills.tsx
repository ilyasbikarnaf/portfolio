"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { backendSkills, frontendSkills, otherSkills } from "@/lib/skills";

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: frontendSkills,
  },
  {
    name: "Backend",
    skills: backendSkills,
  },
  {
    name: "Tools & Others",
    skills: otherSkills,
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="pt-6">
                <h3 className="mb-6 text-center text-xl font-semibold">
                  {category.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="mb-2"
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
