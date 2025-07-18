import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Computer, Settings, Monitor, Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const ComputerBasics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const topics = [
    {
      title: "Display Settings Mastery",
      icon: Monitor,
      description:
        "Learn to optimize your screen resolution, brightness, and multi-monitor setup",
      skills: [
        "Resolution adjustment",
        "Color calibration",
        "Multiple displays",
        "Screen orientation",
      ],
      difficulty: "Beginner",
    },
    {
      title: "Program Management",
      icon: Settings,
      description: "Master installing, updating, and removing programs safely",
      skills: [
        "Safe uninstallation",
        "Program updates",
        "Registry cleanup",
        "Startup management",
      ],
      difficulty: "Intermediate",
    },
    {
      title: "Windows Customization",
      icon: Computer,
      description:
        "Personalize your Windows experience with themes and settings",
      skills: [
        "Theme installation",
        "Taskbar customization",
        "Start menu",
        "Desktop widgets",
      ],
      difficulty: "Beginner",
    },
    {
      title: "Network & Performance",
      icon: Wifi,
      description: "Monitor internet speed and optimize system performance",
      skills: [
        "Speed monitoring",
        "Network troubleshooting",
        "Performance tuning",
        "System maintenance",
      ],
      difficulty: "Advanced",
    },
  ];

  const tutorials = [
    "How to Adjust Display Settings for Optimal Viewing",
    "Complete Guide to Safely Uninstalling Programs",
    "Windows 11 Theme Customization Tutorial",
    "Adding Internet Speed to Your Taskbar",
    "Essential Windows 11 Features Every User Should Know",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-8"
      >
        {/* Breadcrumb */}
        <motion.nav variants={itemVariants} className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/#software"
              className="hover:text-foreground transition-colors"
            >
              Software
            </Link>
            <span>/</span>
            <span className="text-foreground">Computer Basics</span>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Computer className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Computer Basics Mastery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master fundamental computer skills from display settings to system
            optimization. Build confidence with hands-on tutorials and practical
            knowledge.
          </p>
        </motion.div>

        {/* Learning Topics */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <topic.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{topic.title}</CardTitle>
                      </div>
                      <Badge
                        variant={
                          topic.difficulty === "Beginner"
                            ? "default"
                            : topic.difficulty === "Intermediate"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {topic.difficulty}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {topic.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tutorial List */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Step-by-Step Tutorials</CardTitle>
              <p className="text-muted-foreground">
                Follow our comprehensive video tutorials to master each topic
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tutorials.map((tutorial, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    <span className="flex-1">{tutorial}</span>
                    <Button variant="outline" size="sm">
                      Watch
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Getting Started Section */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of students who have mastered computer basics
                through our practical, hands-on approach. Start with the
                fundamentals and build your confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Start Learning Now
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <Link to="/contact">Get Help</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComputerBasics;
