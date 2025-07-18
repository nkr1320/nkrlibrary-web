import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Code, Globe, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Installations = () => {
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

  const installationGuides = [
    {
      title: "Git Installation & Setup",
      icon: Code,
      description: "Complete guide to installing Git for version control",
      steps: [
        "Download Git for Windows",
        "Configure user settings",
        "Set up SSH keys",
        "First repository setup",
      ],
      difficulty: "Intermediate",
      timeEstimate: "30 minutes",
    },
    {
      title: "Node.js & NPM Setup",
      icon: Globe,
      description: "Install Node.js runtime and package manager",
      steps: [
        "Download LTS version",
        "Verify installation",
        "Update NPM",
        "Global packages setup",
      ],
      difficulty: "Beginner",
      timeEstimate: "15 minutes",
    },
    {
      title: "React JS Development Environment",
      icon: Code,
      description: "Set up complete React development workflow",
      steps: [
        "Create React App",
        "VSCode extensions",
        "Development tools",
        "Project structure",
      ],
      difficulty: "Intermediate",
      timeEstimate: "45 minutes",
    },
    {
      title: "Windows Development Setup",
      icon: Download,
      description: "Essential development tools for Windows",
      steps: [
        "Windows Subsystem for Linux",
        "PowerShell setup",
        "Development fonts",
        "Terminal configuration",
      ],
      difficulty: "Advanced",
      timeEstimate: "60 minutes",
    },
    {
      title: "Bootstrap Framework",
      icon: Palette,
      description: "Install and configure Bootstrap for responsive design",
      steps: [
        "CDN vs NPM installation",
        "Custom theming",
        "Component usage",
        "Build optimization",
      ],
      difficulty: "Beginner",
      timeEstimate: "20 minutes",
    },
  ];

  const quickInstalls = [
    { name: "Visual Studio Code", category: "Code Editor", status: "Popular" },
    { name: "Chrome DevTools", category: "Debugging", status: "Essential" },
    { name: "Postman", category: "API Testing", status: "Recommended" },
    {
      name: "Docker Desktop",
      category: "Containerization",
      status: "Advanced",
    },
    { name: "MongoDB Compass", category: "Database", status: "Useful" },
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
            <span className="text-foreground">Installations</span>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Download className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Software Installation Guides
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of software installation with our comprehensive,
            step-by-step guides. From development tools to frameworks, get
            everything set up correctly.
          </p>
        </motion.div>

        {/* Installation Guides */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Detailed Installation Guides
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {installationGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <guide.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                      </div>
                      <div className="flex gap-2">
                        <Badge
                          variant={
                            guide.difficulty === "Beginner"
                              ? "default"
                              : guide.difficulty === "Intermediate"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {guide.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {guide.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ⏱️ {guide.timeEstimate}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">
                        Installation Steps:
                      </h4>
                      <div className="space-y-2">
                        {guide.steps.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-center space-x-3"
                          >
                            <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full text-primary font-semibold text-xs">
                              {stepIndex + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4">
                        <Button className="w-full" variant="outline">
                          View Full Guide
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Install Tools */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Quick Install Tools</CardTitle>
              <p className="text-muted-foreground">
                Essential development tools with one-click installation guides
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickInstalls.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {tool.category}
                      </p>
                    </div>
                    <Badge
                      variant={
                        tool.status === "Essential" ? "default" : "outline"
                      }
                    >
                      {tool.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Troubleshooting Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="text-xl">
                Installation Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Common Issues:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Permission errors during installation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Path environment variables not set</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Version compatibility conflicts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Quick Solutions:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Run installer as administrator</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Restart terminal after installation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Check system requirements first</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Need Installation Help?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our step-by-step video tutorials make software installation
                simple and error-free. Get personalized help if you encounter
                any issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Watch Tutorials
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <Link to="/contact">Get Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Installations;
