import React from 'react';
import { Bot, Trash2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDeviceType } from '@/hooks/use-mobile';

interface SentrumChatHeaderProps {
  onDownload: () => void;
  onClearHistory: () => void;
}

const SentrumChatHeader: React.FC<SentrumChatHeaderProps> = ({
  onDownload,
  onClearHistory,
}) => {
  const deviceType = useDeviceType();

  const getResponsiveClasses = () => {
    switch (deviceType) {
      case 'mobile':
        return {
          container: 'p-3',
          gap: 'gap-2',
          avatarSize: 'h-8 w-8',
          botIconSize: 'h-4 w-4',
          titleSize: 'text-sm',
          subtitleSize: 'text-xs',
          buttonIconSize: 'h-3.5 w-3.5'
        };
      default:
        return {
          container: 'p-4',
          gap: 'gap-3',
          avatarSize: 'h-10 w-10',
          botIconSize: 'h-6 w-6',
          titleSize: 'text-base',
          subtitleSize: 'text-sm',
          buttonIconSize: 'h-4 w-4'
        };
    }
  };

  const classes = getResponsiveClasses();

  return (
    <div className={`${classes.container} border-b border-border bg-muted/30`}>
      <div className="flex items-center justify-between">
        <div className={`flex items-center ${classes.gap}`}>
          <div className={`${classes.avatarSize} rounded-full bg-primary flex items-center justify-center`}>
            <Bot className={`${classes.botIconSize} text-white`} />
          </div>
          <div>
            <h3 className={`font-semibold text-foreground ${classes.titleSize}`}>SENTRUM</h3>
            <p className={`${classes.subtitleSize} text-muted-foreground`}>Your AI Learning Assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={onDownload} 
            variant="ghost" 
            size={deviceType === 'mobile' ? 'sm' : 'sm'}
          >
            <Download className={classes.buttonIconSize} />
          </Button>
          <Button 
            onClick={onClearHistory} 
            variant="ghost" 
            size={deviceType === 'mobile' ? 'sm' : 'sm'}
          >
            <Trash2 className={classes.buttonIconSize} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SentrumChatHeader;