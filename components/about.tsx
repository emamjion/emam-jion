"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Calendar, GraduationCap, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Emam_Khalid_Jion_CV.pdf"
    link.click()
  }

  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2020-2024",
      description: "Specialized in Software Engineering and Web Development",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Online Bootcamp",
      year: "2023",
      description: "Intensive program covering modern web technologies",
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      description: "Leading development of enterprise web applications using React and Node.js",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      description: "Developed responsive websites and web applications for various clients",
    },
    {
      title: "Junior Developer",
      company: "Startup Hub",
      period: "2021 - 2022",
      description: "Worked on multiple projects using modern JavaScript frameworks",
    },
  ]

  const TimelineItem = ({ item, index, isEducation = false }: { item: any; index: number; isEducation?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border"></div>

      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

      {/* Content */}
      <div className={`flex ${index % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"}`}>
        <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                {isEducation ? (
                  <GraduationCap className="h-5 w-5 text-primary" />
                ) : (
                  <Briefcase className="h-5 w-5 text-primary" />
                )}
                {isEducation ? item.degree : item.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {isEducation ? `${item.institution} • ${item.year}` : `${item.company} • ${item.period}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            I'm a passionate Full Stack Developer with over 3 years of experience in creating modern web applications. I
            love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll
            find me exploring new technologies or contributing to open-source projects.
          </p>
          <Button onClick={downloadCV} variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background p-4 rounded-lg text-center border hover:border-primary transition-colors"
                  >
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-8">
              <div className="relative space-y-8">
                {education.map((edu, index) => (
                  <TimelineItem key={index} item={edu} index={index} isEducation={true} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-8">
              <div className="relative space-y-8">
                {experience.map((exp, index) => (
                  <TimelineItem key={index} item={exp} index={index} isEducation={false} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
