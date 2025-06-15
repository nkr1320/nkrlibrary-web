import { useState, useMemo, useCallback } from 'react';
import { getCriticalVideos, type Video } from '@/lib/video-data-chunks';

export interface SearchResult {
  video: Video;
  relevanceScore: number;
  matchedTerms: string[];
}

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Debounced search function
  const searchVideos = useCallback((searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return [];

    const normalizedQuery = searchQuery.toLowerCase().trim();
    const queryTerms = normalizedQuery.split(/\s+/);
    
    const results: SearchResult[] = [];

    getCriticalVideos().forEach(video => {
      let relevanceScore = 0;
      const matchedTerms: string[] = [];
      
      // Search in title (highest weight)
      const titleScore = calculateMatchScore(video.title.toLowerCase(), queryTerms);
      if (titleScore > 0) {
        relevanceScore += titleScore * 3;
        matchedTerms.push('title');
      }

      // Search in description (medium weight)
      if (video.description) {
        const descriptionScore = calculateMatchScore(video.description.toLowerCase(), queryTerms);
        if (descriptionScore > 0) {
          relevanceScore += descriptionScore * 2;
          matchedTerms.push('description');
        }
      }

      // Search in category (medium weight)
      const categoryScore = calculateMatchScore(video.category.toLowerCase(), queryTerms);
      if (categoryScore > 0) {
        relevanceScore += categoryScore * 2;
        matchedTerms.push('category');
      }

      // Search in keywords (low weight)
      if (video.keywords) {
        const keywordScore = calculateKeywordMatch(video.keywords, queryTerms);
        if (keywordScore > 0) {
          relevanceScore += keywordScore;
          matchedTerms.push('keywords');
        }
      }

      if (relevanceScore > 0) {
        results.push({
          video,
          relevanceScore,
          matchedTerms
        });
      }
    });

    // Sort by relevance score (descending)
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }, []);

  // Get search suggestions
  const getSuggestions = useCallback((searchQuery: string): string[] => {
    if (!searchQuery.trim()) {
      return [...recentSearches].slice(0, 8);
    }

    const normalizedQuery = searchQuery.toLowerCase();
    const suggestions = new Set<string>();

    // Add matching video titles (truncated)
    getCriticalVideos().forEach(video => {
      if (video.title.toLowerCase().includes(normalizedQuery)) {
        suggestions.add(video.title);
      }
    });

    return Array.from(suggestions).slice(0, 8);
  }, [recentSearches]);

  // Add to recent searches
  const addToRecentSearches = useCallback((searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    setRecentSearches(prev => {
      const filtered = prev.filter(term => term !== searchTerm);
      return [searchTerm, ...filtered].slice(0, 5);
    });
  }, []);

  // Clear recent searches
  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
  }, []);

  return {
    query,
    setQuery,
    searchVideos,
    getSuggestions,
    recentSearches,
    addToRecentSearches,
    clearRecentSearches
  };
};

// Helper function to calculate match score
function calculateMatchScore(text: string, queryTerms: string[]): number {
  let score = 0;
  
  queryTerms.forEach(term => {
    if (text.includes(term)) {
      // Exact word match gets higher score
      const wordBoundaryRegex = new RegExp(`\\b${term}\\b`, 'i');
      if (wordBoundaryRegex.test(text)) {
        score += 2;
      } else {
        score += 1;
      }
    }
  });
  
  return score;
}

// Helper function to calculate keyword match score
function calculateKeywordMatch(keywords: string[], queryTerms: string[]): number {
  let score = 0;
  
  keywords.forEach(keyword => {
    queryTerms.forEach(term => {
      if (keyword.toLowerCase().includes(term)) {
        score += 1;
      }
    });
  });
  
  return score;
}