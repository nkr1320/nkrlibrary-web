import React from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

interface VideoCardProps {
  title: string;
  videoUrl: string;
  thumbnail?: string;
  category: string;
  year?: string;
  duration?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  videoUrl,
  thumbnail,
  category,
  year,
  duration,
}) => {
  const handleVideoClick = () => {
    window.open(videoUrl, "_blank", "noopener,noreferrer");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
      style={{ willChange: "transform" }}
    >
      <div
        onClick={handleVideoClick}
        className="h-full cursor-pointer group glass-card hover:glass-hover transition-all duration-200"
      >
        {/* Video Thumbnail */}
        <div className="relative overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center relative">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="320"
                height="192"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <Play className="text-4xl mb-2" />
                <span className="text-xs text-muted-foreground">
                  Video Preview
                </span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-background/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-primary text-primary-foreground rounded-full p-3"
              >
                <ExternalLink />
              </motion.div>
            </div>

            {/* Category Chip */}
            <div className="absolute top-3 left-3">
              <div className="glass rounded-full px-3 py-1 text-xs font-medium text-foreground">
                {category}
              </div>
            </div>

            {/* Duration */}
            {duration && (
              <div className="absolute bottom-3 right-3">
                <div className="glass rounded-full px-3 py-1 text-xs font-medium text-foreground">
                  {duration}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-200 text-lg">
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Play className="text-xs" />
              Watch Video
            </span>
            {year && <span>{year}</span>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
