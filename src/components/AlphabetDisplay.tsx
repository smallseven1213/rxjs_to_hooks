'use client';

import { useAlphabetProgression } from '@/hooks/useAlphabetProgression';

export const AlphabetDisplay = () => {
  const { letter, isRunning, start, stop, reset } = useAlphabetProgression();

  const getLetterPosition = () => {
    return letter.charCodeAt(0) - 64;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
      <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100">
        Alphabet Progression
      </h2>
      
      <div className="relative">
        <div className="text-8xl font-mono font-bold text-purple-600 dark:text-purple-400">
          {letter}
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-purple-500">
          ({getLetterPosition()}/26)
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
        <div 
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${(getLetterPosition() / 26) * 100}%` }}
        />
      </div>

      <div className="flex gap-2">
        {!isRunning ? (
          <button
            onClick={start}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
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
          disabled={!isRunning && letter === 'A'}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset
        </button>
      </div>

      <div className={`text-sm ${isRunning ? 'text-green-600' : 'text-gray-500'}`}>
        Status: {isRunning ? 'Cycling' : 'Paused'}
      </div>
    </div>
  );
};