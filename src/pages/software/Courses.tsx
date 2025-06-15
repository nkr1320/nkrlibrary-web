import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Code, Palette, Database, Globe, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
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
      title: "Complete Web Development Bootcamp",
      icon: Globe,
      description: "Master HTML, CSS, JavaScript, React, and Node.js in one comprehensive course",
      duration: "12 weeks",
      lessons: 45,
      students: 1250,
      level: "Beginner to Advanced",
      price: "Free",
      topics: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js", "MongoDB", "Project Deployment"],
      progress: 85,
      status: "Most Popular"
    },
    {
      title: "Python Programming Mastery",
      icon: Code,
      description: "From basics to advanced Python programming with real-world projects",
      duration: "10 weeks",
      lessons: 38,
      students: 890,
      level: "Beginner",
      price: "Free",
      topics: ["Python Basics", "Data Structures", "OOP", "Web Scraping", "APIs", "Data Science Intro"],
      progress: 72,
      status: "New"
    },
    {
      title: "UI/UX Design Fundamentals",
      icon: Palette,
      description: "Learn design principles, prototyping, and user experience best practices",
      duration: "8 weeks",
      lessons: 24,
      students: 645,
      level: "Beginner",
      price: "Free",
      topics: ["Design Principles", "Figma", "Prototyping", "User Research", "Wireframing", "Design Systems"],
      progress: 60,
      status: "Featured"
    },
    {
      title: "Database Management & SQL",
      icon: Database,
      description: "Master SQL, database design, and data management techniques",
      duration: "6 weeks",
      lessons: 28,
      students: 520,
      level: "Intermediate",
      price: "Free",
      topics: ["SQL Basics", "Database Design", "MySQL", "PostgreSQL", "Data Modeling", "Performance Optimization"],
      progress: 45,
      status: "Updated"
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Build cross-platform mobile apps with React Native",
      duration: "14 weeks",
      lessons: 52,
      students: 340,
      level: "Intermediate",
      price: "Free",
      topics: ["React Native", "Mobile UI/UX", "Navigation", "APIs", "State Management", "App Store Deployment"],
      progress: 30,
      status: "Coming Soon"
    },
    {
      title: "Computer Science Fundamentals",
      icon: BookOpen,
      description: "Essential CS concepts including algorithms and data structures",
      duration: "16 weeks",
      lessons: 60,
      students: 780,
      level: "Intermediate to Advanced",
      price: "Free",
      topics: ["Algorithms", "Data Structures", "Big O Notation", "System Design", "Computer Networks", "Operating Systems"],
      progress: 95,
      status: "Complete"
    }
  ];

  const learningPaths = [
    {
      title: "Frontend Development Path",
      courses: ["Complete Web Development Bootcamp", "UI/UX Design Fundamentals"],
      duration: "20 weeks",
      description: "Become a frontend specialist"
    },
    {
      title: "Full-Stack Development Path",
      courses: ["Complete Web Development Bootcamp", "Database Management & SQL", "Computer Science Fundamentals"],
      duration: "34 weeks",
      description: "Master both frontend and backend"
    },
    {
      title: "Mobile Development Path",
      courses: ["Python Programming Mastery", "Mobile App Development", "UI/UX Design Fundamentals"],
      duration: "32 weeks",
      description: "Specialize in mobile applications"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Most Popular': return 'bg-primary text-primary-foreground';
      case 'New': return 'bg-green-500 text-white';
      case 'Featured': return 'bg-orange-500 text-white';
      case 'Updated': return 'bg-blue-500 text-white';
      case 'Coming Soon': return 'bg-muted text-muted-foreground';
      case 'Complete': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

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
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#software" className="hover:text-foreground transition-colors">Software</Link>
            <span>/</span>
            <span className="text-foreground">All Courses</span>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Complete Course Catalog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive learning paths designed for students. Master programming, design, and technology 
            with project-based courses and real-world applications.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Available Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <course.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{course.level}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(course.status)}>
                        {course.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{course.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Course Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-primary">{course.lessons}</p>
                          <p className="text-xs text-muted-foreground">Lessons</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{course.students}</p>
                          <p className="text-xs text-muted-foreground">Students</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{course.duration}</p>
                          <p className="text-xs text-muted-foreground">Duration</p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Course Progress</span>
                          <span className="text-sm text-muted-foreground">{course.progress}% Complete</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      {/* Topics */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2">What you'll learn:</h4>
                        <div className="flex flex-wrap gap-1">
                          {course.topics.slice(0, 4).map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {course.topics.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{course.topics.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-2">
                        <Button 
                          className="w-full" 
                          disabled={course.status === 'Coming Soon'}
                          variant={course.status === 'Coming Soon' ? 'outline' : 'default'}
                        >
                          {course.status === 'Coming Soon' ? 'Notify Me When Available' : 'Start Learning'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Paths */}
        <motion.div variants={itemVariants} className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Recommended Learning Paths</CardTitle>
              <p className="text-muted-foreground">
                Structured course sequences designed to build expertise in specific areas
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningPaths.map((path, index) => (
                  <div key={index} className="p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <h4 className="font-semibold text-lg mb-2">{path.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{path.description}</p>
                    <p className="text-sm font-medium text-primary mb-3">⏱️ {path.duration}</p>
                    <div className="space-y-2">
                      {path.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4" size="sm">
                      Start Path
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of students building their careers through practical, project-based learning. 
                All courses are completely free and designed for real-world success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Browse All Courses
                </Button>
                <Button variant="outline" size="lg" className="px-8" asChild>
                  <Link to="/contact">Get Learning Advice</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Courses;