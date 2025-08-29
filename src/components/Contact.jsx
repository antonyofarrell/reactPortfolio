import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Twitch,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ri44axd", // replace with your EmailJS service ID
        "template_103i0p4", // replace with your EmailJS template ID
        e.target,
        "djv2FVeVvl9nc2xX5" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });
          setIsSubmitting(false);
        },
        (error) => {
          toast({
            title: "Error",
            description:
              "There was an error sending your message. Please try again.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-primary">touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
          I'm always open to discussing new opportunities, collaborations, or
          answering any questions you may have.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 justify-center">
            <div className="flex justify-center space-x-4">
              <div className="p-3 rounded-full flex items-center justify-center bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:antonyofarrell@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  antonyofarrell@gmail.com
                </a>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <div className="p-3 rounded-full flex items-center justify-center bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+34615508165"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 615 508 165
                </a>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <div className="p-3 rounded-full flex items-center justify-center bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">
                  Barcelona, Spain
                </a>
              </div>
            </div>
            <div className=" flex flex-col justify-center pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 font-medium"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring2 focus:ring-primary"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring2 focus:ring-primary"
                  placeholder="yourname@gmail.com..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 font-medium"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring2 focus:ring-primary resize-none h-32"
                  placeholder="Hello, I would like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                <Send size={16} />{" "}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
