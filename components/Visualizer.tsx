
import React from 'react';
import { FormationStage } from '../types';

interface VisualizerProps {
  currentStage: FormationStage;
}

const Visualizer: React.FC<VisualizerProps> = ({ currentStage }) => {
  return (
    <div className="relative w-full aspect-video bg-blue-50 rounded-xl overflow-hidden border-2 border-slate-200 shadow-inner">
      <svg viewBox="0 0 800 450" className="w-full h-full">
        {/* Sky */}
        <rect width="800" height="450" fill="#e0f2fe" />
        
        {/* Sea background */}
        <rect y="300" width="800" height="150" fill="#0369a1" />
        
        {/* Headland Base */}
        <path d="M 0 450 L 0 100 Q 150 80 250 100 Q 350 120 450 100 L 450 450 Z" fill="#71717a" />
        
        {/* Stage Overlays */}
        {currentStage === FormationStage.CRACK && (
           <line x1="450" y1="200" x2="450" y2="350" stroke="#4a4a4a" strokeWidth="4" strokeDasharray="8" />
        )}

        {currentStage === FormationStage.CAVE && (
          <path d="M 450 250 Q 380 300 450 350 Z" fill="#18181b" opacity="0.8" />
        )}

        {currentStage === FormationStage.ARCH && (
          <path d="M 350 450 L 350 300 Q 400 250 450 300 L 450 450 Z" fill="#0369a1" />
        )}

        {currentStage === FormationStage.STACK && (
          <>
            {/* The Cutout for the arch */}
            <path d="M 350 100 L 450 100 L 450 450 L 350 450 Z" fill="#e0f2fe" />
            <path d="M 350 450 L 350 300 Q 400 250 450 300 L 450 450 Z" fill="#0369a1" />
            
            {/* The Remaining Headland */}
            <path d="M 0 450 L 0 100 Q 150 80 250 100 Q 300 110 320 150 L 320 450 Z" fill="#71717a" />
            
            {/* The Isolated Stack */}
            <rect x="500" y="100" width="80" height="350" fill="#71717a" />
            <path d="M 500 100 Q 540 80 580 100" fill="#52525b" />
          </>
        )}

        {currentStage === FormationStage.STUMP && (
          <>
            {/* The Remaining Headland */}
            <path d="M 0 450 L 0 100 Q 150 80 250 100 Q 300 110 320 150 L 320 450 Z" fill="#71717a" />
            
            {/* The Stump */}
            <rect x="500" y="380" width="80" height="70" fill="#71717a" />
            <path d="M 500 380 Q 540 370 580 380" fill="#52525b" />
            {/* Water over stump */}
            <rect x="500" y="300" width="80" height="80" fill="#0369a1" opacity="0.3" />
          </>
        )}

        {/* Waves foreground */}
        <path d="M 0 350 Q 100 330 200 350 T 400 350 T 600 350 T 800 350 L 800 450 L 0 450 Z" fill="#0ea5e9" opacity="0.6">
          <animate attributeName="d" 
            values="M 0 350 Q 100 330 200 350 T 400 350 T 600 350 T 800 350 L 800 450 L 0 450 Z;
                    M 0 350 Q 100 370 200 350 T 400 350 T 600 350 T 800 350 L 800 450 L 0 450 Z;
                    M 0 350 Q 100 330 200 350 T 400 350 T 600 350 T 800 350 L 800 450 L 0 450 Z"
            dur="4s" repeatCount="indefinite" />
        </path>
      </svg>
      
      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm">
        Stage: {currentStage}
      </div>
    </div>
  );
};

export default Visualizer;
