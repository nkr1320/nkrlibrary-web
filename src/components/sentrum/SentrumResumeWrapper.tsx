import React, { useContext, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertCircle, Loader2, Info } from 'lucide-react';
import SentrumResume from './SentrumResume';
import { ResumeContext, ResumeProvider } from '@/contexts/ResumeContext';

const SentrumResumeWrapper: React.FC = () => {
  const [isRetrying, setIsRetrying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [useLocalProvider, setUseLocalProvider] = useState(false);
  
  // Check if we're within the ResumeProvider context
  const context = useContext(ResumeContext);
  
  useEffect(() => {
    setMounted(true);
    console.log('SentrumResumeWrapper: Component mounted');
    console.log('SentrumResumeWrapper: Context available:', !!context);
    console.log('SentrumResumeWrapper: Context value:', context);
    
    // If context is not available after mounting, use local provider
    if (!context) {
      console.log('SentrumResumeWrapper: No context found, will use local provider');
      setUseLocalProvider(true);
    }
  }, [context]);

  const handleRetry = () => {
    setIsRetrying(true);
    // Force a re-render after a small delay
    setTimeout(() => {
      setIsRetrying(false);
      window.location.reload();
    }, 1000);
  };

  // Show loading state during initial mount
  if (!mounted) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">AI Resume Builder</h3>
          <p className="text-sm text-muted-foreground">Loading resume builder...</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Initializing...</span>
          </div>
        </div>
      </div>
    );
  }

  if (context === undefined && !useLocalProvider) {
    // Context is not available, offer to use local provider
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">AI Resume Builder</h3>
          <p className="text-sm text-muted-foreground">
            Initializing resume context...
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center space-y-4 max-w-sm">
            <div className="flex items-center justify-center">
              <Info className="h-12 w-12 text-primary" />
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Context Initialization</h4>
              <p className="text-sm text-muted-foreground">
                The resume builder is setting up a local context for this session.
              </p>
            </div>
            <Button 
              onClick={() => setUseLocalProvider(true)}
              variant="default"
              className="w-full"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Initialize Resume Builder
            </Button>
            <p className="text-xs text-muted-foreground">
              This will create a temporary workspace for building your resume.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  // Context is available or we're using local provider
  console.log('SentrumResumeWrapper: Rendering SentrumResume');
  console.log('SentrumResumeWrapper: Using local provider:', useLocalProvider);
  
  if (useLocalProvider) {
    // Wrap in local ResumeProvider for this session
    return (
      <ResumeProvider>
        <SentrumResume />
      </ResumeProvider>
    );
  }
  
  return <SentrumResume />;
};

export default SentrumResumeWrapper;