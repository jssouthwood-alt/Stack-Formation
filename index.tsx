
const STAGES = [
  {
    title: "1. The Weakness",
    description: "Coastal erosion begins where there is a weakness or crack in the resistant headland (e.g., limestone or chalk). This is often a joint or fault line."
  },
  {
    title: "2. Cave Formation",
    description: "Hydraulic action and abrasion widen the crack over time. Waves force air and water into the joint, causing the rock to shatter and form a cave."
  },
  {
    title: "3. The Arch",
    description: "Erosion continues on both sides of a headland, or the cave eventually cuts all the way through, creating an arch above the water."
  },
  {
    title: "4. The Stack",
    description: "The roof of the arch is weakened by sub-aerial weathering and gravity. Without support, the roof collapses, leaving an isolated pillar of rock called a stack."
  },
  {
    title: "5. The Stump",
    description: "The base of the stack is continuously attacked by waves. Eventually, the stack is undercut and collapses, leaving only a low-lying stump visible at low tide."
  }
];

let currentStep = 0;

const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
const stageTitle = document.getElementById('stage-title')!;
const stageDesc = document.getElementById('stage-desc')!;
const stageCount = document.getElementById('stage-count')!;
const stepDots = document.getElementById('step-dots')!;

function init() {
  // Create dots
  STAGES.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `h-2 rounded-full transition-all ${i === 0 ? 'bg-blue-600 w-6' : 'bg-slate-200 w-2'}`;
    dot.id = `dot-${i}`;
    stepDots.appendChild(dot);
  });

  updateUI();

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateUI();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < STAGES.length - 1) {
      currentStep++;
      updateUI();
    }
  });
}

function updateUI() {
  const stage = STAGES[currentStep];
  
  // Text
  stageTitle.innerText = stage.title;
  stageDesc.innerText = stage.description;
  stageCount.innerText = `Stage ${currentStep + 1} of 5`;

  // Buttons
  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === STAGES.length - 1;

  // Dots
  STAGES.forEach((_, i) => {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) {
      dot.className = i === currentStep ? 'h-2 w-6 bg-blue-600 rounded-full transition-all' : 'h-2 w-2 bg-slate-200 rounded-full transition-all';
    }
  });

  // SVG Layers
  for (let i = 1; i <= 5; i++) {
    const layer = document.getElementById(`svg-stage-${i}`);
    if (layer) {
      if (i - 1 === currentStep) {
        layer.classList.remove('stage-hidden');
        layer.classList.add('stage-visible');
      } else if (i - 1 < currentStep) {
        // Keep previous stages visible unless they are superseded
        // 3 (Arch) disappears when 4 (Stack) arrives
        if (i === 3 && currentStep >= 3) {
          layer.classList.add('stage-hidden');
          layer.classList.remove('stage-visible');
        } 
        // 4 (Stack) disappears when 5 (Stump) arrives
        else if (i === 4 && currentStep >= 4) {
          layer.classList.add('stage-hidden');
          layer.classList.remove('stage-visible');
        }
        else {
          layer.classList.remove('stage-hidden');
          layer.classList.add('stage-visible');
        }
      } else {
        layer.classList.add('stage-hidden');
        layer.classList.remove('stage-visible');
      }
    }
  }
}

init();
