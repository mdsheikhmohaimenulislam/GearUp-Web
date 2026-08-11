
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@gearup.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+880 1234-567890",
    description: "Mon - Sun, 9:00 AM - 10:00 PM",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Dhaka, Bangladesh",
    description: "Serving outdoor enthusiasts",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "9:00 AM - 10:00 PM",
    description: "Available every day",
  },
];

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="container mx-auto px-5 py-16 md:py-20">
      {/* Section Header */}
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
          <MessageCircle className="h-4 w-4" />
          Get In Touch
        </div>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Have Questions?
          <span className="block text-green-600">
            We&apos;re Here to Help
          </span>
        </h2>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          Whether you need help with a rental, have a question about our
          platform, or want to become a provider, feel free to reach out.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Contact Information */}
        <div className="space-y-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 truncate text-sm font-medium">
                      {item.value}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Support Card */}
          <div className="rounded-2xl border bg-green-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold text-green-900">
                  Need quick assistance?
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-green-800/80">
                  Our support team is ready to help with rental questions,
                  bookings, and other concerns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="border shadow-sm">
          <CardHeader className="pb-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Send className="h-5 w-5" />
              </div>

              <div>
                <CardTitle className="text-xl">
                  Send Us a Message
                </CardTitle>

                <CardDescription className="mt-1">
                  Tell us how we can help you with your rental experience.
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="focus-visible:ring-green-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="focus-visible:ring-green-600"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium"
                >
                  Subject
                </label>

                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to know?"
                  className="focus-visible:ring-green-600"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                >
                  Message
                </label>

                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={4}
                  required
                  className="resize-none focus-visible:ring-green-600"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-green-700 font-semibold hover:bg-green-800"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We usually respond within 24 hours.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

