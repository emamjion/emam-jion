"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaCss3Alt,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiGraphql, SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Skills() {
  const frontendSkills = [
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "Framer Motion", icon: TbBrandFramerMotion },
    { name: "JavaScript", icon: FaJs },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
  ];

  const backendSkills = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: BiLogoPostgresql },
    { name: "REST APIs", icon: Globe },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Git", icon: FaGit },
    { name: "Docker", icon: FaDocker },
  ];

  const SkillCard = ({
    skills,
    title,
  }: {
    skills: typeof frontendSkills;
    title: string;
  }) => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="font-medium text-center text-sm">
                    {skill.name}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SkillCard skills={frontendSkills} title="Frontend Development" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SkillCard skills={backendSkills} title="Backend Development" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
