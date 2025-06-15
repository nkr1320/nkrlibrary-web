import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Typography, Tabs, Tab, Box, Button } from '@mui/material';
import { YouTube, FilterList } from '@mui/icons-material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { VirtualizedVideoGrid } from '@/components/ui/virtualized-video-grid';
import { SearchBar } from '@/components/search/SearchBar';
import { getCriticalVideos, optimizedCategories } from '@/lib/video-data-chunks';
import { useDebouncedSearch } from '@/hooks/use-debounced-search';

const Videos = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { searchResults, debouncedQuery, setQueryExternal, setQuery } = useDebouncedSearch();
  
  const searchQuery = searchParams.get('search') || '';

  // Sync URL search parameter with search hook
  useEffect(() => {
    if (searchQuery) {
      setQueryExternal(searchQuery);
    }
  }, [searchQuery, setQueryExternal]);

  // Handle tab change - clear search when switching to category tabs
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    
    // Clear search when switching to any category tab
    if (searchQuery) {
      setQuery(''); // Clear the search query in hook
      setSearchParams({}); // Clear URL search params
    }
  };

  const categories = [
    { name: 'All', key: 'all' },
    { name: 'Software', key: 'Software' },
    { name: 'Medical', key: 'Medical' },
    { name: 'CyberScams', key: 'CyberScams' },
    { name: 'Science', key: 'Science' },
    { name: 'Career', key: 'Career' },
    { name: 'Creative', key: 'Creative' },
    { name: 'Gadgets', key: 'Gadgets' },
    { name: 'Defense', key: 'Defense' },
    { name: 'Education', key: 'Education' },
  ];

  const filteredVideos = useMemo(() => {
    // If there's a debounced search query, use search results
    if (debouncedQuery.trim()) {
      return searchResults.map(result => result.video);
    }

    // Otherwise filter by category
    const criticalVideos = getCriticalVideos();
    if (activeTab === 0) return criticalVideos; // All videos
    const selectedCategory = categories[activeTab];
    return criticalVideos.filter(video => video.category === selectedCategory.key);
  }, [debouncedQuery, activeTab, searchResults]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" className="text-4xl md:text-6xl font-bold mb-6">
              Video Library
            </Typography>
            <Typography variant="h5" className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive tutorials and guides across technology, cybersecurity, medical coding, and more.
            </Typography>
            
            <Button
              href="https://www.youtube.com/@nkrlibrary/playlists"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<YouTube />}
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
              Subscribe to Channel
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Box className="border-b border-border">
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'hsl(var(--muted-foreground))',
                    '&.Mui-selected': {
                      color: 'hsl(var(--primary))',
                    },
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: 'hsl(var(--primary))',
                  },
                }}
              >
                {categories.map((category) => (
                  <Tab 
                    key={category.key} 
                    label={category.name}
                    icon={category.key === 'all' ? <FilterList /> : undefined}
                    iconPosition="start"
                  />
                ))}
              </Tabs>
            </Box>
          </motion.div>

          {/* Videos Grid */}
          <VirtualizedVideoGrid
            key={activeTab}
            videos={filteredVideos}
            itemsPerPage={24}
            showLoadMore={true}
          />

          {/* No results */}
          {filteredVideos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Typography variant="h6" className="text-muted-foreground">
                {debouncedQuery.trim() 
                  ? `No videos found for "${debouncedQuery}"`
                  : "No videos found in this category."
                }
              </Typography>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Videos;