import React from 'react';
import { MaadAtomStage } from './MaadAtomStage';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[660px] mx-auto select-none flex items-center justify-center">
      <MaadAtomStage markSrc="/janusmaad-mark.png" wordmarkSrc="/janusmaad-wordmark.png" />
    </div>
  );
};
