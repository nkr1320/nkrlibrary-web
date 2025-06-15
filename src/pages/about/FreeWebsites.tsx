import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Gift, Code, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreeWebsites = () => {
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
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <span>/</span>
            <span className="text-foreground">Free Websites</span>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Free Website Program
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering students with professional websites at no cost. Build your digital presence 
            and showcase your skills to the world.
          </p>
        </motion.div>

        {/* Program Benefits */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Gift className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Completely Free</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No hidden costs, no subscription fees. Professional websites 
                provided free to all students in our programs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Professional Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Modern, responsive designs built with latest web technologies. 
                Portfolio-quality websites that impress employers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Personal Branding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Showcase your projects, skills, and achievements. Build your 
                professional brand and online presence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Make your work visible worldwide. Connect with opportunities 
                and build networks beyond geographical boundaries.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FreeWebsites;