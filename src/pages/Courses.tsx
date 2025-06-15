import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { PlayArrow, Code, Security, Web, School, ArrowForward } from '@mui/icons-material';

const Courses = () => {
  const courses = [
    {
      title: "Computer Basics",
      description: "Master fundamental computer concepts and operations",
      icon: <School className="text-2xl" />,
      topics: ["Operating Systems", "File Management", "Basic Troubleshooting", "Digital Literacy"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Software Development",
      description: "Learn programming languages and development tools",
      icon: <Code className="text-2xl" />,
      topics: ["HTML/CSS", "JavaScript", "React", "Python", "Web Development"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity Awareness",
      description: "Protect yourself from online scams and threats",
      icon: <Security className="text-2xl" />,
      topics: ["Phishing Detection", "Password Security", "Safe Browsing", "Data Protection"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Software Installations",
      description: "Step-by-step guides for installing essential software",
      icon: <Web className="text-2xl" />,
      topics: ["Development Tools", "Operating Systems", "Applications", "Configuration"],
      color: "from-green-500 to-teal-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Explore Our</span>
              <br />
              <span className="text-primary">Learning Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive courses designed to empower you with essential tech skills, 
              from computer basics to advanced programming and cybersecurity.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                href="https://www.youtube.com/@nkrlibrary/playlists"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
                endIcon={<ArrowForward />}
                sx={{
                  background: 'hsl(var(--primary))',
                  color: 'hsl(var(--primary-foreground))',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'hsl(var(--primary))',
                    filter: 'brightness(0.9)',
                  },
                }}
              >
                Start Learning Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Course Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl bg-card border border-border p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${course.color} text-primary-foreground`}>
                        {course.icon}
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {course.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-card-foreground mb-3">Topics Covered:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.topics.map((topic) => (
                          <div
                            key={topic}
                            className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
                          >
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of students who have already transformed their tech skills with our comprehensive courses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  href="https://www.youtube.com/@nkrlibrary/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrow />}
                  sx={{
                    background: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'hsl(var(--primary))',
                      filter: 'brightness(0.9)',
                    },
                  }}
                >
                  Browse All Courses
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  href="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary))',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'hsl(var(--primary))',
                      background: 'hsl(var(--primary) / 0.1)',
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;