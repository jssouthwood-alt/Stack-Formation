
import React, { useState } from 'react';
import { STAGES } from './constants';
import { FormationStage } from './types';
import Visualizer from './components/Visualizer';
import AITutor from './components/AITutor';

const App: React.FC = () => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const currentStage = STAGES[currentStageIdx];

  const nextStage = () => {
    if (currentStageIdx < STAGES.length - 1) {
      setCurrentStageIdx(currentStageIdx + 1);
    }
  };

  const prevStage = () => {
    if (currentStageIdx > 0) {
      setCurrentStageIdx(currentStageIdx - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-xl">GeoMaster UK</h1>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">GCSE Geography Revision</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Coastal Processes</a>
            <a href="#" className="hover:text-blue-600 transition-colors">River Landforms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Glosssary</a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left/Middle Column: Content & Visualizer */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Formation of Stacks & Stumps</h2>
              <div className="flex gap-2">
                <button 
                  onClick={prevStage}
                  disabled={currentStageIdx === 0}
                  className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 border border-slate-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  onClick={nextStage}
                  disabled={currentStageIdx === STAGES.length - 1}
                  className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 border border-slate-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <Visualizer currentStage={currentStage.id} />

            <div className="mt-8">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{currentStage.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {currentStage.description}
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Active Processes</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStage.processes.map(p => (
                      <span key={p} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Geology Note</h4>
                  <p className="text-sm text-amber-800 italic">{currentStage.geologyNote}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {STAGES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentStageIdx(i)}
                  className={`flex-shrink-0 w-32 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    currentStageIdx === i 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' 
                      : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  Stage {i + 1}
                </button>
              ))}
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-4">Core Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Hydraulic Action</h3>
                <p className="text-sm text-slate-600">Water is forced into cracks, compressing air and causing rock fragments to break off as the pressure is released.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Abrasion</h3>
                <p className="text-sm text-slate-600">Waves fling sand and pebbles against the headland, wearing it away like sandpaper.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Weathering</h3>
                <p className="text-sm text-slate-600">Sub-aerial processes like freeze-thaw and biological activity weaken the rock above the waterline.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: AI Tutor & Quick Links */}
        <div className="space-y-8">
          <AITutor />
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="font-bold text-lg mb-2">Exam Tip!</h3>
            <p className="text-sm text-blue-100 leading-relaxed mb-4">
              When describing this sequence in your GCSE exam, always mention <strong>hard rock</strong> headlands and the role of <strong>gravity</strong> in arch collapse.
            </p>
            <div className="bg-white/20 p-4 rounded-xl border border-white/20">
              <p className="text-xs font-bold uppercase tracking-wider mb-1">Key Term</p>
              <p className="text-lg font-semibold italic">Headland</p>
              <p className="text-xs text-blue-100">A piece of land that sticks out into the sea, usually made of resistant rock.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-4 mt-16 text-center text-slate-400 text-sm">
        <p>&copy; 2024 GeoMaster Education. Content aligned with AQA, Edexcel, and OCR GCSE Specifications.</p>
      </footer>
    </div>
  );
};

export default App;
