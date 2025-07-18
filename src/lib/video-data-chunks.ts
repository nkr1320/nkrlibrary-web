export interface Video {
  id: string;
  title: string;
  url: string;
  category: string;
  year?: string;
  thumbnail?: string;
  description?: string;
  keywords?: string[];
}

// Lazy-loaded video chunks for better performance
export const loadVideoChunk = async (category?: string): Promise<Video[]> => {
  // Return critical videos only to avoid loading the massive video data file
  const criticalVideos = getCriticalVideos();

  if (!category || category === "all") {
    return criticalVideos;
  }

  return criticalVideos.filter((video) => video.category === category);
};

// Preload critical video data
export const getCriticalVideos = (): Video[] => {
  // Return a subset of most important videos for initial load
  return [
    {
      id: "1",
      title: "Git Installation Latest Video",
      url: "https://www.youtube.com/watch?v=YCrXCm416mY",
      category: "Software",
      year: "2024",
    },
    {
      id: "2",
      title: "React Hooks in Telugu Tutorial 2025",
      url: "https://www.youtube.com/watch?v=Nq5c1FtOrac",
      category: "Software",
      year: "2025",
    },
    {
      id: "15",
      title: "Medical Coding Course Part 1",
      url: "https://www.youtube.com/watch?v=N7jZxShJ3uI",
      category: "Medical",
      year: "2024",
    },
    {
      id: "29",
      title: "Be Aware of Sextortion and Blackmail Scams",
      url: "https://www.youtube.com/watch?v=FAYfRD9jnDs",
      category: "CyberScams",
      year: "2024",
    },
    {
      id: "45",
      title: "DeepSeek AI - Trump Warns of Wake-up Call",
      url: "https://www.youtube.com/watch?v=tS-m7CiAwSM",
      category: "Science",
      year: "2025",
    },
    {
      id: "49",
      title: "How to Add Upwork Withdrawal Bank Account",
      url: "https://www.youtube.com/watch?v=093smeLTJ50",
      category: "Career",
      year: "2024",
    },
  ];
};

// Video categories for faster filtering
export const optimizedCategories = [
  { name: "All", key: "all", count: 0 }, // Will be calculated dynamically
  { name: "Software", key: "Software", count: 0 },
  { name: "Medical", key: "Medical", count: 0 },
  { name: "CyberScams", key: "CyberScams", count: 0 },
  { name: "Science", key: "Science", count: 0 },
  { name: "Career", key: "Career", count: 0 },
  { name: "Creative", key: "Creative", count: 0 },
  { name: "Gadgets", key: "Gadgets", count: 0 },
  { name: "Defense", key: "Defense", count: 0 },
  { name: "Education", key: "Education", count: 0 },
];
