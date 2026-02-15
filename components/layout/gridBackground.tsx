'use client';

import { cn } from '@/lib/utils/cn';

interface GridBackgroundProps {
  variant?: 'hero' | 'about' | 'footer';
  className?: string;
}

export function GridBackground({ variant = 'hero', className }: GridBackgroundProps) {
  const gridSrc = {
    hero: '/grid/herogrid3.svg',
    about: '/grid/aboutgrid.svg',
    footer: '/grid/footergrid.svg'
  };

  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none overflow-hidden",
        className
      )}
    >
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${gridSrc[variant]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-lienar-to-br from-zinc-950/80 via-zinc-950/50 to-zinc-950/80" />
    </div>
  );
}