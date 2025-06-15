import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { getCriticalVideos, type Video } from '@/lib/video-data-chunks';

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  videoSuggestions?: Video[];
  metadata?: {
    action?: 'navigate' | 'search' | 'summarize';
    target?: string;
    results?: any;
  };
}

interface LearningNote {
  id: string;
  content: string;
  timestamp: Date;
  tags: string[];
  videoId?: string;
}

interface SentrumState {
  isOpen: boolean;
  currentView: 'chat' | 'resume' | 'notebook';
  messages: ChatMessage[];
  learningNotes: LearningNote[];
  currentContext: {
    currentPage: string;
    visitedPages: string[];
    watchedVideos: string[];
    sessionStartTime: Date;
  };
  isTyping: boolean;
  voiceEnabled: boolean;
}

interface SentrumContextType {
  state: SentrumState;
  openSentrum: (view?: 'chat' | 'resume' | 'notebook') => void;
  closeSentrum: () => void;
  sendMessage: (content: string) => Promise<void>;
  addNote: (content: string, tags: string[], videoId?: string) => void;
  searchContent: (query: string) => { video: Video; relevance: number }[];
  navigateToPage: (path: string) => void;
  clearHistory: () => void;
  getSummary: () => string;
  toggleVoice: () => void;
  setCurrentView: (view: 'chat' | 'resume' | 'notebook') => void;
}

const SentrumContext = createContext<SentrumContextType | undefined>(undefined);

export const useSentrum = () => {
  const context = useContext(SentrumContext);
  if (!context) {
    throw new Error('useSentrum must be used within a SentrumProvider');
  }
  return context;
};

interface SentrumProviderProps {
  children: ReactNode;
}

export const SentrumProvider: React.FC<SentrumProviderProps> = ({ children }) => {
  const [state, setState] = useState<SentrumState>({
    isOpen: false,
    currentView: 'chat',
    messages: [],
    learningNotes: [],
    currentContext: {
      currentPage: window.location.pathname,
      visitedPages: [window.location.pathname],
      watchedVideos: [],
      sessionStartTime: new Date(),
    },
    isTyping: false,
    voiceEnabled: false,
  });

  const openSentrum = useCallback((view: 'chat' | 'resume' | 'notebook' = 'chat') => {
    setState(prev => ({ ...prev, isOpen: true, currentView: view }));
  }, []);

  const closeSentrum = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }));
  }, []);

  const searchContent = useCallback((query: string) => {
    const normalizedQuery = query.toLowerCase();
    const criticalVideos = getCriticalVideos();
    const results = criticalVideos
      .map(video => {
        let relevance = 0;
        if (video.title.toLowerCase().includes(normalizedQuery)) relevance += 3;
        if (video.description?.toLowerCase().includes(normalizedQuery)) relevance += 2;
        if (video.category.toLowerCase().includes(normalizedQuery)) relevance += 2;
        if (video.keywords?.some(k => k.toLowerCase().includes(normalizedQuery))) relevance += 1;
        return { video, relevance };
      })
      .filter(result => result.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);

    return results;
  }, []);

  const navigateToPage = useCallback((path: string) => {
    window.location.href = path;
    setState(prev => ({
      ...prev,
      currentContext: {
        ...prev.currentContext,
        currentPage: path,
        visitedPages: [...prev.currentContext.visitedPages, path],
      },
    }));
  }, []);

  // Enhanced content database for comprehensive responses
  const getTopicContent = useCallback((topic: string) => {
    const topicLower = topic.toLowerCase();
    
    // CyberScam/Security content
    if (topicLower.includes('cyber') || topicLower.includes('scam') || topicLower.includes('security') || 
        topicLower.includes('phishing') || topicLower.includes('malware') || topicLower.includes('hack') ||
        topicLower.includes('fraud') || topicLower.includes('sextortion') || topicLower.includes('honey trap') ||
        topicLower.includes('data breach') || topicLower.includes('safety') || topicLower.includes('attack')) {
      
      const cyberVideos = getCriticalVideos().filter(v => v.category === 'CyberScams');
      const scamTypes = [
        'Data Leaks & Privacy Breaches',
        'Honey Trap Scams', 
        'Phishing Attacks',
        'Cyber Attacks & Malware',
        'Sextortion & Blackmail',
        'Fraudulent Phone Calls'
      ];
      
      return {
        type: 'cybersecurity',
        videos: cyberVideos,
        scamTypes,
        safetyTips: [
          'Use strong, unique passwords',
          'Enable 2FA everywhere',
          'Keep software updated',
          'Be skeptical of unsolicited communications'
        ]
      };
    }
    
    // Medical coding content
    if (topicLower.includes('medical') || topicLower.includes('coding') || topicLower.includes('healthcare') ||
        topicLower.includes('icd') || topicLower.includes('diagnosis') || topicLower.includes('chart')) {
      
      const medicalVideos = getCriticalVideos().filter(v => v.category === 'Medical');
      return {
        type: 'medical',
        videos: medicalVideos,
        topics: ['Medical Coding', 'Chart Processing', 'ICD Guidelines', 'Healthcare Documentation']
      };
    }
    
    // Software/Development content
    if (topicLower.includes('software') || topicLower.includes('code') || topicLower.includes('programming') ||
        topicLower.includes('web') || topicLower.includes('react') || topicLower.includes('javascript') ||
        topicLower.includes('html') || topicLower.includes('css') || topicLower.includes('git') ||
        topicLower.includes('development') || topicLower.includes('tutorial')) {
      
      const softwareVideos = getCriticalVideos().filter(v => v.category === 'Software');
      return {
        type: 'software',
        videos: softwareVideos,
        topics: ['Web Development', 'React', 'JavaScript', 'Git', 'HTML/CSS', 'Programming']
      };
    }
    
    return null;
  }, []);

  const generateAIResponse = useCallback((userMessage: string): { content: string; videoSuggestions: Video[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Resume building commands
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      // Experience addition commands
      if (lowerMessage.includes('add') && (lowerMessage.includes('experience') || lowerMessage.includes('job') || lowerMessage.includes('work'))) {
        // Extract company and position if mentioned
        const companyMatch = lowerMessage.match(/at ([A-Za-z\s]+)/);
        const positionMatch = lowerMessage.match(/as (a |an )?([A-Za-z\s]+?) (at|in)/);
        
        let response = "🎯 **ADDING WORK EXPERIENCE**\n\n";
        response += "I'll help you add your work experience to your resume!\n\n";
        
        if (companyMatch || positionMatch) {
          response += "**Detected Information:**\n";
          if (companyMatch) response += `• Company: ${companyMatch[1].trim()}\n`;
          if (positionMatch) response += `• Position: ${positionMatch[2].trim()}\n`;
          response += "\n";
        }
        
        response += "**📝 To complete this entry, please provide:**\n";
        response += "• Company name\n";
        response += "• Job title/position\n";
        response += "• Employment duration (e.g., Jan 2020 - Present)\n";
        response += "• Key responsibilities and achievements\n\n";
        response += "💡 **Pro tip:** Use action verbs and quantify your achievements when possible!";
        
        return { content: response, videoSuggestions: [] };
      }
      
      // Skills addition commands
      if (lowerMessage.includes('add') && lowerMessage.includes('skill')) {
        let response = "🛠️ **ADDING SKILLS**\n\n";
        response += "I'll help you add skills to your resume!\n\n";
        response += "**💡 Skill Categories to Consider:**\n";
        response += "• **Technical Skills:** Programming languages, software, tools\n";
        response += "• **Soft Skills:** Communication, leadership, problem-solving\n";
        response += "• **Industry-Specific:** Domain knowledge, certifications\n\n";
        response += "**📋 Resume Tips:**\n";
        response += "• List 6-12 relevant skills\n";
        response += "• Prioritize skills mentioned in job descriptions\n";
        response += "• Use specific technologies over generic terms\n";
        return { content: response, videoSuggestions: [] };
      }
      
      // Education addition commands
      if (lowerMessage.includes('add') && lowerMessage.includes('education')) {
        let response = "🎓 **ADDING EDUCATION**\n\n";
        response += "I'll help you add your educational background!\n\n";
        response += "**📚 Information Needed:**\n";
        response += "• Institution name\n";
        response += "• Degree/certification\n";
        response += "• Graduation year\n";
        response += "• GPA (if above 3.5)\n";
        response += "• Relevant coursework or honors\n\n";
        response += "💡 **Tip:** List education in reverse chronological order!";
        return { content: response, videoSuggestions: [] };
      }
      
      // Summary/objective help
      if (lowerMessage.includes('summary') || lowerMessage.includes('objective')) {
        let response = "📝 **PROFESSIONAL SUMMARY HELP**\n\n";
        response += "I'll help you craft a compelling professional summary!\n\n";
        response += "**✨ Key Elements:**\n";
        response += "• 2-3 sentences highlighting your value proposition\n";
        response += "• Years of experience and key expertise areas\n";
        response += "• Notable achievements or specializations\n";
        response += "• What you bring to potential employers\n\n";
        response += "**📖 Example Structure:**\n";
        response += "\"[X] years experienced [role] with expertise in [skills/areas]. Proven track record in [achievements]. Seeking to leverage [skills] to [value for employer].\"\n\n";
        response += "💡 **Pro tip:** Tailor your summary to each job application!";
        return { content: response, videoSuggestions: [] };
      }
      
      // ATS optimization
      if (lowerMessage.includes('ats') || lowerMessage.includes('optimize') || lowerMessage.includes('scan')) {
        let response = "🤖 **ATS OPTIMIZATION TIPS**\n\n";
        response += "I'll help you make your resume ATS-friendly!\n\n";
        response += "**⚡ Key ATS Strategies:**\n";
        response += "• Use standard section headings (Experience, Education, Skills)\n";
        response += "• Include keywords from job descriptions\n";
        response += "• Use simple formatting (avoid tables, graphics)\n";
        response += "• Choose standard fonts (Arial, Calibri, Times New Roman)\n";
        response += "• Save as both PDF and Word formats\n\n";
        response += "**📊 Your Current ATS Score:** Check the main resume builder for live scoring!\n\n";
        response += "💡 **Pro tip:** Mirror the language used in job postings!";
        return { content: response, videoSuggestions: [] };
      }
      
      // General resume help
      let response = "📄 **RESUME BUILDER ASSISTANCE**\n\n";
      response += "I'm here to help you create an outstanding resume! Here's what I can help with:\n\n";
      response += "**🎯 Available Commands:**\n";
      response += "• \"Add my experience at [Company] as [Position]\"\n";
      response += "• \"Help me write a professional summary\"\n";
      response += "• \"Add my education from [University]\"\n";
      response += "• \"What skills should I include?\"\n";
      response += "• \"How to optimize for ATS?\"\n\n";
      response += "**📋 Quick Tips:**\n";
      response += "• Keep it to 1-2 pages\n";
      response += "• Use action verbs and quantify achievements\n";
      response += "• Tailor content to each job application\n";
      response += "• Proofread for errors\n\n";
      response += "💡 **Try the Resume tab above for hands-on editing!**";
      
      return { content: response, videoSuggestions: [] };
    }
    
    // Enhanced topic detection - automatically detect any topic mention
    const topicContent = getTopicContent(userMessage);
    let videoSuggestions: Video[] = [];
    
    // Always try to find related videos for any user query
    const searchResults = searchContent(userMessage);
    if (searchResults.length > 0) {
      videoSuggestions = searchResults.slice(0, 3).map(result => result.video);
    }
    
    if (topicContent) {
      let response = '';
      
      if (topicContent.type === 'cybersecurity') {
        response = `🛡️ **CYBERSECURITY & DIGITAL SAFETY**\n\n`;
        response += `I found comprehensive cybersecurity content! Here's what's available:\n\n`;
        response += `**🚨 Common Cyber Threats:**\n`;
        topicContent.scamTypes.forEach(scam => {
          response += `• ${scam}\n`;
        });
        response += `\n**📺 Educational Videos (${topicContent.videos.length} available):**\n`;
        topicContent.videos.slice(0, 3).forEach((video, i) => {
          response += `${i + 1}. ${video.title}\n`;
        });
        response += `\n**🔒 Essential Safety Tips:**\n`;
        topicContent.safetyTips.forEach(tip => {
          response += `• ${tip}\n`;
        });
        response += `\n💡 Visit our CyberScams section for detailed protection guides!`;
        
        setTimeout(() => navigateToPage('/cyberscams'), 2000);
        return { content: response, videoSuggestions: topicContent.videos.slice(0, 3) };
      }
      
      if (topicContent.type === 'medical') {
        response = `🏥 **MEDICAL CODING & HEALTHCARE**\n\n`;
        response += `Here's our medical coding content:\n\n`;
        response += `**📚 Key Topics:**\n`;
        topicContent.topics.forEach(topic => {
          response += `• ${topic}\n`;
        });
        response += `\n**📺 Tutorial Videos (${topicContent.videos.length} available):**\n`;
        topicContent.videos.slice(0, 3).forEach((video, i) => {
          response += `${i + 1}. ${video.title}\n`;
        });
        response += `\n💡 Perfect for healthcare professionals and coding certification!`;
        return { content: response, videoSuggestions: topicContent.videos.slice(0, 3) };
      }
      
      if (topicContent.type === 'software') {
        response = `💻 **SOFTWARE DEVELOPMENT & PROGRAMMING**\n\n`;
        response += `Comprehensive development tutorials available:\n\n`;
        response += `**🔧 Technologies Covered:**\n`;
        topicContent.topics.forEach(topic => {
          response += `• ${topic}\n`;
        });
        response += `\n**📺 Tutorial Videos (${topicContent.videos.length} available):**\n`;
        topicContent.videos.slice(0, 3).forEach((video, i) => {
          response += `${i + 1}. ${video.title}\n`;
        });
        response += `\n💡 From beginner basics to advanced concepts!`;
        return { content: response, videoSuggestions: topicContent.videos.slice(0, 3) };
      }
    }
    
    // Navigation commands
    if (lowerMessage.includes('go to') || lowerMessage.includes('navigate to') || lowerMessage.includes('open')) {
      if (lowerMessage.includes('cyber') || lowerMessage.includes('scam')) {
        setTimeout(() => navigateToPage('/cyberscams'), 1000);
        return { content: "I'll take you to the Cyber Scams section where you can learn about staying safe online! 🛡️", videoSuggestions };
      }
      if (lowerMessage.includes('about')) {
        setTimeout(() => navigateToPage('/about'), 1000);
        return { content: "Navigating to the About page to learn more about NKR Library! 📖", videoSuggestions };
      }
      if (lowerMessage.includes('contact')) {
        setTimeout(() => navigateToPage('/contact'), 1000);
        return { content: "Taking you to the Contact page! 📞", videoSuggestions };
      }
      if (lowerMessage.includes('videos') || lowerMessage.includes('tutorial')) {
        setTimeout(() => navigateToPage('/videos'), 1000);
        return { content: "Opening the Videos section with all our tutorials! 🎥", videoSuggestions };
      }
      if (lowerMessage.includes('courses')) {
        setTimeout(() => navigateToPage('/courses'), 1000);
        return { content: "Redirecting to our Courses page! 🎓", videoSuggestions };
      }
    }

    // Enhanced search commands - now works with any search-like query
    if (lowerMessage.includes('find') || lowerMessage.includes('search') || lowerMessage.includes('show me') ||
        lowerMessage.includes('look for') || lowerMessage.includes('what about') || lowerMessage.includes('tell me about')) {
      const searchResults = searchContent(userMessage);
      if (searchResults.length > 0) {
        const topResults = searchResults.slice(0, 5);
        let response = `🔍 **SEARCH RESULTS**\n\nI found ${searchResults.length} relevant videos:\n\n`;
        topResults.forEach((result, i) => {
          response += `${i + 1}. **${result.video.title}**\n`;
          response += `   Category: ${result.video.category}\n`;
          if (result.video.description) {
            response += `   ${result.video.description.slice(0, 80)}...\n`;
          }
          response += `\n`;
        });
        response += `💡 Visit our Videos section to watch these tutorials!`;
        return { content: response, videoSuggestions: topResults.slice(0, 3).map(r => r.video) };
      }
      return { content: "I couldn't find specific content matching your query. Try asking about 'cybersecurity', 'medical coding', 'web development', or other topics! 🔍", videoSuggestions: [] };
    }

    // Resume help
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return { content: "I can help you build a professional resume! Click the Resume Builder tab, and I'll guide you through creating a modern, ATS-friendly resume. 📄✨", videoSuggestions };
    }

    // Learning summary
    if (lowerMessage.includes('summary') || lowerMessage.includes('learned') || lowerMessage.includes('progress')) {
      const visitedCount = state.currentContext.visitedPages.length;
      const sessionTime = Math.round((Date.now() - state.currentContext.sessionStartTime.getTime()) / (1000 * 60));
      return { content: `📊 **SESSION SUMMARY**\n\nYou've explored ${visitedCount} pages and spent ${sessionTime} minutes learning.\n\n🎯 Keep up the great learning momentum!`, videoSuggestions };
    }

    // General help
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return { content: `🤖 **I'm SENTRUM - Your AI Learning Assistant!**\n\nI can help you with:\n\n🔍 **Content Discovery:** "Show me cybersecurity videos"\n🧭 **Navigation:** "Go to cyber scams section"\n📚 **Topic Information:** Just mention any topic!\n📝 **Resume Building:** Switch to Resume tab\n📊 **Progress Tracking:** Ask about your learning\n\n💡 **Try asking:** "Tell me about phishing" or "Find React tutorials"!`, videoSuggestions };
    }

    // Default enhanced responses
    const defaultResponses = [
      "Hi there! 👋 I'm here to help you explore NKR Library. Try asking me about 'cybersecurity', 'medical coding', 'web development', or any specific topic you're interested in!",
      "Great to meet you! 🌟 I can show you relevant videos, explain topics, and guide you to the right content. What would you like to learn about today?",
      "Welcome! 🚀 I have access to comprehensive content on technology, cybersecurity, medical coding, and more. Just tell me what you're curious about!",
    ];
    
    return { content: defaultResponses[Math.floor(Math.random() * defaultResponses.length)], videoSuggestions };
  }, [searchContent, navigateToPage, state.currentContext, getTopicContent]);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true,
    }));

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));

    const aiResponse = generateAIResponse(content);
    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: aiResponse.content,
      videoSuggestions: aiResponse.videoSuggestions,
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, aiMessage],
      isTyping: false,
    }));
  }, [generateAIResponse]);

  const addNote = useCallback((content: string, tags: string[], videoId?: string) => {
    const note: LearningNote = {
      id: Date.now().toString(),
      content,
      tags,
      videoId,
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      learningNotes: [...prev.learningNotes, note],
    }));
  }, []);

  const clearHistory = useCallback(() => {
    setState(prev => ({
      ...prev,
      messages: [],
      learningNotes: [],
    }));
  }, []);

  const getSummary = useCallback(() => {
    const { visitedPages, watchedVideos, sessionStartTime } = state.currentContext;
    const sessionMinutes = Math.round((Date.now() - sessionStartTime.getTime()) / (1000 * 60));
    
    return `Session Summary:\n• Visited ${visitedPages.length} pages\n• Watched ${watchedVideos.length} videos\n• Session time: ${sessionMinutes} minutes\n• Notes taken: ${state.learningNotes.length}`;
  }, [state]);

  const toggleVoice = useCallback(() => {
    setState(prev => ({ ...prev, voiceEnabled: !prev.voiceEnabled }));
  }, []);

  const setCurrentView = useCallback((view: 'chat' | 'resume' | 'notebook') => {
    setState(prev => ({ ...prev, currentView: view }));
  }, []);

  const contextValue: SentrumContextType = {
    state,
    openSentrum,
    closeSentrum,
    sendMessage,
    addNote,
    searchContent,
    navigateToPage,
    clearHistory,
    getSummary,
    toggleVoice,
    setCurrentView,
  };

  return (
    <SentrumContext.Provider value={contextValue}>
      {children}
    </SentrumContext.Provider>
  );
};