import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, MessageCircle, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityDriven = () => {
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
            <span className="text-foreground">Community Driven</span>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Community-Driven Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built by the community, for the community. Collaborative learning, 
            shared knowledge, and mutual support drive our success.
          </p>
        </motion.div>

        {/* Community Aspects */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Collaborative Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Students learn together, share experiences, and help each other grow. 
                Peer-to-peer learning accelerates understanding.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Open Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Forum discussions, live Q&A sessions, and direct mentorship. 
                Always someone to help when you need it.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Handshake className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Mutual Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Everyone contributes to the community's success. Share knowledge, 
                help others, and grow together.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Inclusive Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Welcoming space for learners of all backgrounds and skill levels. 
                Diversity makes our community stronger.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CommunityDriven;