
import { FormationStage, StageDetails } from './types';

export const STAGES: StageDetails[] = [
  {
    id: FormationStage.CRACK,
    title: "1. The Weakness",
    description: "Coastal erosion begins where there is a weakness or crack in the resistant headland (e.g., limestone or chalk). This is often a joint or fault line.",
    processes: ["Hydraulic Action", "Weathering"],
    geologyNote: "Hard rock headlands are susceptible to tectonic joints."
  },
  {
    id: FormationStage.CAVE,
    title: "2. Cave Formation",
    description: "Hydraulic action and abrasion widen the crack over time. Waves force air and water into the joint, causing the rock to shatter and form a cave.",
    processes: ["Hydraulic Action", "Abrasion"],
    geologyNote: "The cave grows deeper as the energy is concentrated."
  },
  {
    id: FormationStage.ARCH,
    title: "3. The Arch",
    description: "Erosion continues on both sides of a headland, or the cave eventually cuts all the way through, creating an arch above the water.",
    processes: ["Corrosion", "Abrasion"],
    geologyNote: "Durdle Door in Dorset is a famous example."
  },
  {
    id: FormationStage.STACK,
    title: "4. Arch Collapse (Stack)",
    description: "The roof of the arch is weakened by sub-aerial weathering and gravity. Without support, the roof collapses, leaving an isolated pillar of rock called a stack.",
    processes: ["Biological Weathering", "Gravity", "Freeze-Thaw"],
    geologyNote: "Old Harry Rocks (Dorset) features prominent stacks."
  },
  {
    id: FormationStage.STUMP,
    title: "5. The Stump",
    description: "The base of the stack is continuously attacked by waves. Eventually, the stack is undercut and collapses, leaving only a low-lying stump visible at low tide.",
    processes: ["Wave Cut Notch", "Undercutting"],
    geologyNote: "Over time, even the stump will be eroded away."
  }
];

export const SYSTEM_PROMPT = `You are a GCSE Geography expert tutor for the UK specification. 
Your goal is to help students understand coastal landscapes, specifically the formation of caves, arches, stacks, and stumps.
Keep explanations clear, use geographical terminology (Hydraulic Action, Abrasion, Weathering, Sub-aerial processes), and be encouraging.
Focus on hard rock headlands and the sequence of erosion.`;
