"use client"

import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/emamkhalidjon",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/emamkhalidjon",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/emamkhalidjon",
      label: "Twitter",
    },
  ]

  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {new Date().getFullYear()} Emam Khalid Jion. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
