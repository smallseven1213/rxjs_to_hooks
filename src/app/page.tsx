import { TimeCounter } from '@/components/TimeCounter';
import { AlphabetDisplay } from '@/components/AlphabetDisplay';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          RxJS Countdown Demo
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start max-w-4xl mx-auto">
          <div className="flex-1 w-full">
            <TimeCounter />
          </div>
          
          <div className="flex-1 w-full">
            <AlphabetDisplay />
          </div>
        </div>
        
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            Built with Next.js, RxJS, and React Hooks
          </p>
          <p className="text-xs mt-2">
            Each component demonstrates RxJS Subjects with independent controls
          </p>
        </div>
      </main>
    </div>
  );
}