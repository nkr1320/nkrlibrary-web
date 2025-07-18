import { useState, useEffect, useCallback, useRef } from 'react';

interface VoiceRecognitionHook {
  isListening: boolean;
  isSupported: boolean;
  startListening: () => void;
  stopListening: () => void;
  error: string | null;
}

interface SpeechRecognitionResult {
  [key: number]: {
    transcript: string;
    confidence: number;
  };
  length: number;
}

interface SpeechRecognitionResultList {
  [key: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: Event) => void;
  onend: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

export const useVoiceRecognition = (
  onWakeWord: () => void,
  wakeWord: string = 'sentrum'
): VoiceRecognitionHook => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognition);

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        transcript = transcript.toLowerCase();

        if (transcript.includes(wakeWord.toLowerCase())) {
          onWakeWord();
          setIsListening(false);
          recognition.stop();
        }
      };

      recognition.onerror = (event: Event) => {
        setError(event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [onWakeWord, wakeWord]);

  const startListening = useCallback(() => {
    if (recognitionRef.current && isSupported) {
      setError(null);
      setIsListening(true);
      recognitionRef.current.start();
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, []);

  return {
    isListening,
    isSupported,
    startListening,
    stopListening,
    error,
  };
};