import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Palette, Layers, Wand2, Image, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const Photoshop = () => {
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

  const courses = [
    {
      title: "Logo Design Mastery",
      icon: Palette,
      description: "Create professional logos from concept to final design",
      skills: [
        "Brand identity",
        "Vector graphics",
        "Typography",
        "Color theory",
        "Client presentation",
      ],
      difficulty: "Intermediate",
      projects: 8,
      available: false,
    },
    {
      title: "Photo Editing Essentials",
      icon: Camera,
      description: "Master photo retouching and enhancement techniques",
      skills: [
        "Color correction",
        "Skin retouching",
        "Background removal",
        "Lighting adjustment",
        "Artistic effects",
      ],
      difficulty: "Beginner",
      projects: 12,
      available: false,
    },
    {
      title: "UI Design Fundamentals",
      icon: Monitor,
      description: "Design modern user interfaces and web layouts",
      skills: [
        "Interface design",
        "Mobile layouts",
        "Responsive design",
        "Design systems",
        "Prototyping",
      ],
      difficulty: "Intermediate",
      projects: 10,
      available: false,
    },
  ];

  const techniques = [
    {
      title: "Advanced Selection Techniques",
      icon: Wand2,
      topics: [
        "Magic Wand mastery",
        "Pen tool precision",
        "Color range selection",
        "Refine edge techniques",
      ],
    },
    {
      title: "Layer Management",
      icon: Layers,
      topics: [
        "Blend modes",
        "Layer masks",
        "Adjustment layers",
        "Smart objects",
      ],
    },
    {
      title: "Professional Retouching",
      icon: Image,
      topics: [
        "Frequency separation",
        "Dodge and burn",
        "Content-aware fill",
        "Healing techniques",
      ],
    },
  ];

  const upcomingFeatures = [
    "Complete Photoshop fundamentals course",
    "Advanced photo manipulation techniques",
    "Logo design from scratch tutorials",
    "UI/UX design workflow in Photoshop",
    "Print design and preparation",
    "Creative effects and compositing",
    "Industry-standard workflow practices",
    "Portfolio development guidance",
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
            <span className="text-foreground">Photoshop</span>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl mb-6">
            <Camera className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Photoshop Mastery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Master Adobe Photoshop with comprehensive tutorials covering logo
            design, photo editing, and UI design. From beginner basics to
            professional techniques.
          </p>
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800 px-4 py-2"
          >
            🎯 In Development - Expected Q2 2024
          </Badge>
        </motion.div>

        {/* Planned Courses */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Planned Course Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-2 border-dashed border-muted-foreground/30 bg-muted/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
                          <course.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <CardTitle className="text-lg">
                          {course.title}
                        </CardTitle>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {course.projects} Projects
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      {course.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Difficulty:</span>
                        <Badge
                          variant={
                            course.difficulty === "Beginner"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {course.difficulty}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">
                          Skills you'll learn:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {course.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full" disabled variant="outline">
                        Join Waitlist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Techniques Preview */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Techniques You'll Master
              </CardTitle>
              <p className="text-muted-foreground">
                Professional Photoshop techniques taught through hands-on
                projects
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {techniques.map((technique, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl mb-4">
                      <technique.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="font-semibold mb-3">{technique.title}</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {technique.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center justify-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Features */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="text-2xl">What's Coming</CardTitle>
              <p className="text-muted-foreground">
                Comprehensive Photoshop training program in development
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-purple-500 text-white rounded-full text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stay Updated Section */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our Photoshop course is currently in development. Sign up to get
                notified when it launches, and receive early access to exclusive
                tutorials and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Get Notified
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <Link to="/contact">Request Specific Topics</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Expected launch: Q2 2024 • Join 500+ students on the waitlist
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photoshop;
