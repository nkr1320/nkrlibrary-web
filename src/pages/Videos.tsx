import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Youtube, Filter } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { VirtualizedVideoGrid } from "@/components/ui/virtualized-video-grid";
import { SearchBar } from "@/components/search/SearchBar";
import {
  getCriticalVideos,
  optimizedCategories,
} from "@/lib/video-data-chunks";
import { useDebouncedSearch } from "@/hooks/use-debounced-search";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";

const Videos = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { searchResults, debouncedQuery, setQueryExternal, setQuery } =
    useDebouncedSearch();

  const searchQuery = searchParams.get("search") || "";

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
      setQuery(""); // Clear the search query in hook
      setSearchParams({}); // Clear URL search params
    }
  };

  const categories = [
    { name: "All", key: "all" },
    { name: "Software", key: "Software" },
    { name: "Medical", key: "Medical" },
    { name: "CyberScams", key: "CyberScams" },
    { name: "Science", key: "Science" },
    { name: "Career", key: "Career" },
    { name: "Creative", key: "Creative" },
    { name: "Gadgets", key: "Gadgets" },
    { name: "Defense", key: "Defense" },
    { name: "Education", key: "Education" },
  ];

  const filteredVideos = useMemo(() => {
    // If there's a debounced search query, use search results
    if (debouncedQuery.trim()) {
      return searchResults.map((result) => result.video);
    }

    // Otherwise filter by category
    const criticalVideos = getCriticalVideos();
    if (activeTab === 0) return criticalVideos; // All videos
    const selectedCategory = categories[activeTab];
    return criticalVideos.filter(
      (video) => video.category === selectedCategory.key,
    );
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
    <>
      {/* Unique SEO meta tags for Videos page */}
      <SEOHead
        title="Videos | NKR Library"
        description="Watch free video tutorials on programming, cybersecurity, medical coding, and more at NKR Library."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background"
      >
        {/* Hero Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            {" "}
            {/* Ensures all content is centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Video Library
              </h1>
              {/* Subtitle is perfectly centered using flex and text-center */}
              <p className="text-xl text-muted-foreground max-w-3xl mb-8 text-center">
                Comprehensive tutorials and guides across technology,
                cybersecurity, medical coding, and more.
              </p>

              <Button
                asChild
                variant="default"
                size="lg"
                className="gap-2 px-6 py-2.5 rounded-md text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <a
                  href="https://www.youtube.com/@nkrlibrary/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe to Channel
                </a>
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
              <div className="border-b border-border">
                <div
                  role="tablist"
                  aria-label="Video categories"
                  className="flex space-x-4"
                >
                  {categories.map((category) => (
                    <button
                      key={category.key}
                      onClick={(event) => handleTabChange(event, categories.indexOf(category))}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                        activeTab === categories.indexOf(category)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {category.key === "all" && <Filter className="w-5 h-5" />}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
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
                <p className="text-muted-foreground">
                  {debouncedQuery.trim()
                    ? `No videos found for "${debouncedQuery}"`
                    : "No videos found in this category."}
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Videos;
