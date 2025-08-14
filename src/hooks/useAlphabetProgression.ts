'use client';

import { useEffect, useState } from 'react';
import { countdownService } from '@/services/countdown.service';

export const useAlphabetProgression = (autoStart = false) => {
  const [letter, setLetter] = useState('A');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (autoStart) {
      start();
    }
    
    return () => {
      stop();
    };
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const subscription = countdownService.getAlphabetProgression().subscribe(value => {
      setLetter(value);
    });

    countdownService.startAlphabetProgression();

    return () => {
      subscription.unsubscribe();
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
    setLetter('A');
  };

  const reset = () => {
    setLetter('A');
  };

  return {
    letter,
    isRunning,
    start,
    stop,
    reset
  };
};