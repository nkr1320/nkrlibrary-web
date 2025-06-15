import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, TextField, Button, MenuItem, Snackbar, Alert } from '@mui/material';
import { Send, Email, Phone, LocationOn } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email format').refine(
    (email) => !email.includes('tempmail') && !email.includes('10minutemail'),
    'Disposable email addresses are not allowed'
  ),
  purpose: z.string().min(1, 'Please select a purpose'),
  message: z.string().min(50, 'Message must be at least 50 characters').max(500, 'Message must not exceed 500 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const purposeOptions = [
    { value: 'website', label: 'Request Free Website' },
    { value: 'tutorial', label: 'Tutorial Request' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setSnackbarOpen(true);
      reset();
    } catch (error) {
      setSubmitStatus('error');
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
      icon: Email,
      title: "Email",
      content: "nkrlibraries@gmail.com",
      description: "Send us an email anytime!"
    },
    {
      icon: Phone,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We'll get back to you quickly"
    },
    {
      icon: LocationOn,
      title: "YouTube",
      content: "NKR Library",
      description: "Subscribe for latest updates"
    }
  ];

  return (
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
            Ready to get your free student website or have a question? We'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
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
                        <p className="text-primary font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <Card className="border border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      {...register('fullName')}
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'hsl(var(--primary))',
                          },
                        },
                      }}
                    />
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      {...register('email')}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'hsl(var(--primary))',
                          },
                        },
                      }}
                    />
                  </div>

                  <TextField
                    select
                    label="Purpose"
                    variant="outlined"
                    fullWidth
                    {...register('purpose')}
                    error={!!errors.purpose}
                    helperText={errors.purpose?.message}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'hsl(var(--primary))',
                        },
                      },
                    }}
                  >
                    {purposeOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={5}
                    fullWidth
                    placeholder="Tell us about your project, question, or how we can help you..."
                    {...register('message')}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'hsl(var(--primary))',
                        },
                      },
                    }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={submitStatus === 'loading'}
                      startIcon={<Send />}
                      sx={{
                        background: 'hsl(var(--primary))',
                        color: 'hsl(var(--primary-foreground))',
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'hsl(var(--primary))',
                          filter: 'brightness(0.9)',
                        },
                        '&:disabled': {
                          background: 'hsl(var(--muted))',
                          color: 'hsl(var(--muted-foreground))',
                        },
                      }}
                    >
                      {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={submitStatus === 'success' ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {submitStatus === 'success'
            ? "Thanks! I'll respond within 24 hours."
            : "Something went wrong. Please try again."
          }
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;