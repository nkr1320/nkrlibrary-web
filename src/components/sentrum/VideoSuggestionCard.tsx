import React from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Video } from "@/lib/video-data-chunks";

interface VideoSuggestionCardProps {
  video: Video;
  index: number;
  deviceType?: "mobile" | "tablet" | "desktop" | "large-desktop";
}

const VideoSuggestionCard: React.FC<VideoSuggestionCardProps> = ({
  video,
  index,
  deviceType = "desktop",
}) => {
  const handleVideoClick = () => {
    window.open(video.url, "_blank", "noopener,noreferrer");
  };

  const getResponsiveClasses = () => {
    switch (deviceType) {
      case "mobile":
        return {
          container: "p-2.5",
          gap: "gap-2",
          iconContainer: "h-10 w-10",
          iconSize: "h-4 w-4",
          titleSize: "text-xs",
          categorySize: "text-xs",
          buttonSize: "h-6 w-6",
          buttonIconSize: "h-3 w-3",
        };
      case "tablet":
        return {
          container: "p-3",
          gap: "gap-2.5",
          iconContainer: "h-11 w-11",
          iconSize: "h-4 w-4",
          titleSize: "text-sm",
          categorySize: "text-xs",
          buttonSize: "h-7 w-7",
          buttonIconSize: "h-3.5 w-3.5",
        };
      default:
        return {
          container: "p-3",
          gap: "gap-3",
          iconContainer: "h-12 w-12",
          iconSize: "h-5 w-5",
          titleSize: "text-sm",
          categorySize: "text-xs",
          buttonSize: "h-8 w-8",
          buttonIconSize: "h-4 w-4",
        };
    }
  };

  const classes = getResponsiveClasses();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className={`border border-border rounded-lg ${classes.container} bg-muted/50 hover:bg-muted/80 transition-colors cursor-pointer`}
      onClick={handleVideoClick}
    >
      <div className={`flex items-start ${classes.gap}`}>
        <div
          className={`${classes.iconContainer} bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0`}
        >
          <Play className={`${classes.iconSize} text-primary`} />
        </div>

        <div className="flex-1 min-w-0">
          <h4
            className={`font-medium ${classes.titleSize} text-foreground line-clamp-2 mb-1`}
          >
            {video.title}
          </h4>
          <div
            className={`flex items-center gap-2 ${classes.categorySize} text-muted-foreground`}
          >
            <span
              className={`bg-background/80 px-2 py-0.5 rounded-full ${classes.categorySize}`}
            >
              {video.category}
            </span>
            {video.year && <span>{video.year}</span>}
          </div>
        </div>

        <Button
          size="sm"
          variant="ghost"
          className={`${classes.buttonSize} p-0 flex-shrink-0`}
          onClick={(e) => {
            e.stopPropagation();
            handleVideoClick();
          }}
        >
          <ExternalLink className={classes.buttonIconSize} />
        </Button>
      </div>
    </motion.div>
  );
};

export default VideoSuggestionCard;
