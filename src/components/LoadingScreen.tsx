import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-20 h-20 border-4 border-secondary border-b-transparent rounded-full animate-spin-slow"></div>
      </div>
      <h2 className="mt-8 text-xl font-serif font-bold text-foreground">
        <span className="inline-block animate-pulse">I</span>
        <span className="inline-block animate-pulse delay-100">s</span>
        <span className="inline-block animate-pulse delay-200">h</span>
        <span className="inline-block animate-pulse delay-300">i</span>
        <span className="inline-block animate-pulse delay-400">m</span>
        <span className="inline-block animate-pulse delay-500">w</span>
        <span className="inline-block animate-pulse delay-400">e</span>
        <span className="inline-block animate-pulse delay-300"> </span>
        <span className="inline-block animate-pulse delay-200">S</span>
        <span className="inline-block animate-pulse delay-100">h</span>
        <span className="inline-block animate-pulse">a</span>
        <span className="inline-block animate-pulse delay-100">k</span>
        <span className="inline-block animate-pulse delay-200">i</span>
        <span className="inline-block animate-pulse delay-300">l</span>
        <span className="inline-block animate-pulse delay-400">l</span>
        <span className="inline-block animate-pulse delay-500">a</span>
      </h2>
    </div>
  );
};

export default LoadingScreen;