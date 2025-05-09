"use client";

import type React from "react";

import { useState, useRef, startTransition } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useFormState } from "react-dom";
import { sendContactEmail } from "@/app/actions/email";
import { toast } from "sonner";

const initialState = {
  success: false,
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef(null);

  const [state, formAction, isPending] = useFormState(
    async (prevData, data: FormData) => {
      const { name, email, message } = formData;

      try {
        const result = await sendContactEmail({ name, email, message });

        if (!result.success) {
          toast.error("Error Occured while sending the message");
          return "error occured";
        }

        toast.success("Message Sent successfully");
      } catch (err) {
        console.log(err);
        console.log("error");
        return true;
      }
    },
    initialState
  );

  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // For now, just use mailto
  //   window.location.href = `mailto:ilyas.bikarnaf@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  // };

  return (
    <div ref={ref} className="w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold"
      >
        Get In Touch
      </motion.h2>

      <div className="flex flex-col gap-12 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <Card>
            <CardContent className="pt-6">
              <form action={formAction} className="space-y-6">
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

                <Button
                  type="submit"
                  className="w-full disabled:hover:cursor-not-allowed"
                  disabled={isPending}
                >
                  {isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex w-full flex-col justify-center md:w-1/2"
        >
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <p className="text-muted-foreground">
              Feel free to reach out to me through the form or directly via
              email or social media. I&apos;m always open to discussing new
              projects, opportunities, or just having a chat.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <a
                  href="mailto:ilyas.bikarnaf@gmail.com"
                  className="transition-colors hover:text-primary"
                >
                  ilyas.bikarnaf@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <Github className="mr-3 h-5 w-5 text-primary" />
                <a
                  href="https://github.com/ilyasbikarnaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  github.com/ilyasbikarnaf
                </a>
              </div>

              <div className="flex items-center">
                <Linkedin className="mr-3 h-5 w-5 text-primary" />
                <a
                  href="https://linkedin.com/in/ilyas-bikarnaf-294717330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  linkedin.com/in/ilyas-bikarnaf
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
