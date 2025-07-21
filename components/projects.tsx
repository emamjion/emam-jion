"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, admin dashboard, and inventory management.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Full Stack",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
    {
      id: 3,
      title: "REST API Service",
      description: "A robust REST API service with authentication, rate limiting, and comprehensive documentation.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations and responsive design.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Design",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard with analytics and scheduling features.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
    {
      id: 6,
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts and interactive maps.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Frontend",
      technologies: ["React", "OpenWeather API", "CSS3"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
  ]

  const categories = ["All", "Frontend", "Backend", "Full Stack", "Design"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </motion.div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
