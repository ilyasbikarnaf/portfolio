"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just use mailto
    window.location.href = `mailto:ilyas.bikarnaf@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
  }

  return (
    <div ref={ref} className="w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Get In Touch
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <p className="text-muted-foreground">
              Feel free to reach out to me through the form or directly via email or social media. I&apos;m always open
              to discussing new projects, opportunities, or just having a chat.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:ilyas.bikarnaf@gmail.com" className="hover:text-primary transition-colors">
                  ilyas.bikarnaf@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <Github className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="https://github.com/ilyasbikarnaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/ilyasbikarnaf
                </a>
              </div>

              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-primary" />
                <a
                  href="https://linkedin.com/in/ilyas-bikarnaf-294717330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/ilyas-bikarnaf
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
