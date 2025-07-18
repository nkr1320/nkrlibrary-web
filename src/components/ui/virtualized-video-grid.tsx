import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { motion } from "framer-motion";
import VideoCard from "./video-card";
import { MagneticCard } from "./magnetic-card";
import { useMotionPreferences } from "@/hooks/use-motion-preferences";
import type { Video } from "@/lib/video-data";

interface VirtualizedVideoGridProps {
  videos: Video[];
  className?: string;
  itemsPerPage?: number;
  showLoadMore?: boolean;
}

export const VirtualizedVideoGrid: React.FC<VirtualizedVideoGridProps> = ({
  videos,
  className = "",
  itemsPerPage = 20,
  showLoadMore = true,
}) => {
  const { prefersReducedMotion } = useMotionPreferences();
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  // Memoize visible videos to prevent unnecessary re-renders
  const visibleVideos = useMemo(() => {
    return videos.slice(0, visibleCount);
  }, [videos, visibleCount]);

  const hasMore = videos.length > visibleCount;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + itemsPerPage, videos.length));
  }, [itemsPerPage, videos.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.4,
      },
    },
  };

  return (
    <div className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        {/* Each video uses video.id as a unique, stable key */}
        {visibleVideos.map((video, index) => (
          <motion.div
            key={video.id}
            variants={itemVariants}
            className="relative"
            style={{
              zIndex: 1,
              willChange: "transform",
            }}
            whileHover={{
              zIndex: 10,
              scale: prefersReducedMotion ? 1 : 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              duration: 0.2,
            }}
          >
            <MagneticCard intensity={0.1} scale={1.01}>
              <VideoCard
                title={video.title}
                videoUrl={video.url}
                category={video.category}
                year={video.year}
              />
            </MagneticCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      {hasMore && showLoadMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.button
            onClick={loadMore}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: prefersReducedMotion ? 1 : 0.95 }}
          >
            Load More Videos ({videos.length - visibleCount} remaining)
          </motion.button>
        </motion.div>
      )}

      {/* Loading indicator for better UX */}
      {visibleCount < videos.length && !hasMore && (
        <div className="text-center py-8">
          <div className="text-muted-foreground">All videos loaded</div>
        </div>
      )}
    </div>
  );
};
