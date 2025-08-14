'use client';

import { useEffect, useState } from 'react';
import { countdownService } from '@/services/countdown.service';

export const useTimeCounter = (autoStart = false) => {
  const [count, setCount] = useState(0);
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

    const subscription = countdownService.getTimeCounter().subscribe(value => {
      setCount(value);
    });

    countdownService.startTimeCounter();

    return () => {
      subscription.unsubscribe();
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
    setCount(0);
  };

  const reset = () => {
    setCount(0);
  };

  return {
    count,
    isRunning,
    start,
    stop,
    reset
  };
};