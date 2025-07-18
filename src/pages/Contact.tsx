import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/seo/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .email("Invalid email format")
    .refine(
      (email) => !email.includes("tempmail") && !email.includes("10minutemail"),
      "Disposable email addresses are not allowed",
    ),
  purpose: z.string().min(1, "Please select a purpose"),
  message: z
    .string()
    .min(50, "Message must be at least 50 characters")
    .max(500, "Message must not exceed 500 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const purposeOptions = [
    { value: "website", label: "Request Free Website" },
    { value: "tutorial", label: "Tutorial Request" },
    { value: "collaboration", label: "Collaboration" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setSnackbarOpen(true);
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setSnackbarOpen(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "nkrlibraries@gmail.com",
      description: "Send us an email anytime!",
    },
    {
      icon: Phone,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We'll get back to you quickly",
    },
    {
      icon: MapPin,
      title: "YouTube",
      content: "NKR Library",
      description: "Subscribe for latest updates",
    },
  ];

  return (
    <>
      {/* Unique SEO meta tags for Contact page */}
      <SEOHead
        title="Contact | NKR Library"
        description="Contact NKR Library for free student websites, tech support, or to connect with our team."
      />
      <div className="min-h-screen py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Ready to get your free student website or have a question? We'd
              love to hear from you!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div variants={containerVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <info.icon className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-primary font-medium">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              {/* Social Section moved from Social.tsx */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <a
                      href="#social-main"
                      className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-100 text-blue-900 px-2 py-1 rounded z-50"
                    >
                      {t("skipToSocial")}
                    </a>
                    <div
                      id="social-main"
                      className="w-full"
                      role="region"
                      aria-label={t("connectWithUs")}
                    >
                      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
                        {t("connectWithUs")}
                      </h2>
                      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
                        <div
                          className="flex-1 min-w-0"
                          role="region"
                          aria-label={t("youtubeChannel")}
                        >
                          <h3 className="font-semibold mb-2 text-base sm:text-lg">
                            {t("youtubeChannel")}
                          </h3>
                          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden bg-black">
                            <iframe
                              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                              className="w-full h-full"
                              aria-label={t("youtubeChannel")}
                            ></iframe>
                          </div>
                        </div>
                        <div
                          className="flex-1 flex flex-col gap-2 sm:gap-3 mt-4 md:mt-0"
                          role="region"
                          aria-label={t("followUs")}
                        >
                          <h3 className="font-semibold mb-2 text-base sm:text-lg">
                            {t("followUs")}
                          </h3>
                          <a
                            href="https://www.youtube.com/@yourchannel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center gap-2 text-xs sm:text-sm"
                            aria-label={t("youtube")}
                          >
                            <span
                              className="i-mdi-youtube w-5 h-5"
                              aria-hidden="true"
                            ></span>{" "}
                            {t("youtube")}
                          </a>
                          <a
                            href="https://twitter.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline flex items-center gap-2 text-xs sm:text-sm"
                            aria-label={t("twitter")}
                          >
                            <span
                              className="i-mdi-twitter w-5 h-5"
                              aria-hidden="true"
                            ></span>{" "}
                            {t("twitter")}
                          </a>
                          <a
                            href="https://facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:underline flex items-center gap-2 text-xs sm:text-sm"
                            aria-label={t("facebook")}
                          >
                            <span
                              className="i-mdi-facebook w-5 h-5"
                              aria-hidden="true"
                            ></span>{" "}
                            {t("facebook")}
                          </a>
                          <a
                            href="https://instagram.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:underline flex items-center gap-2 text-xs sm:text-sm"
                            aria-label={t("instagram")}
                          >
                            <span
                              className="i-mdi-instagram w-5 h-5"
                              aria-hidden="true"
                            ></span>{" "}
                            {t("instagram")}
                          </a>
                        </div>
                      </div>
                      <div
                        className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400 text-center"
                        role="status"
                        aria-live="polite"
                      >
                        {t("stayTuned")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="border border-border">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label htmlFor="fullName" className="text-sm font-medium mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          {...register("fullName")}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email")}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="purpose" className="text-sm font-medium mb-1">
                        Purpose
                      </label>
                      <select
                        id="purpose"
                        {...register("purpose")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a purpose</option>
                        {purposeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.purpose && (
                        <p className="text-red-500 text-xs mt-1">{errors.purpose.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        {...register("message")}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your project, question, or how we can help you..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={submitStatus === "loading"}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {submitStatus === "loading"
                          ? "Sending..."
                          : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <Alert
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          severity={submitStatus === "success" ? "success" : "error"}
        >
          {submitStatus === "success"
            ? "Thanks! I'll respond within 24 hours."
            : "Something went wrong. Please try again."}
        </Alert>
      </div>
    </>
  );
};

export default Contact;
