'use client';

import { useTimeCounter } from '@/hooks/useTimeCounter';

export const TimeCounter = () => {
  const { count, isRunning, start, stop, reset } = useTimeCounter();

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
      <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
        Time Counter
      </h2>
      
      <div className="text-6xl font-mono font-bold text-blue-600 dark:text-blue-400">
        {String(count).padStart(3, '0')}
        <span className="text-3xl ml-2">s</span>
      </div>

      <div className="flex gap-2">
        {!isRunning ? (
          <button
            onClick={start}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Start
          </button>
        ) : (
          <button
            onClick={stop}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Stop
          </button>
        )}
        
        <button
          onClick={reset}
          disabled={!isRunning && count === 0}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset
        </button>
      </div>

      <div className={`text-sm ${isRunning ? 'text-green-600' : 'text-gray-500'}`}>
        Status: {isRunning ? 'Running' : 'Stopped'}
      </div>
    </div>
  );
};