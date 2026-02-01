
export enum FormationStage {
  CRACK = 'CRACK',
  CAVE = 'CAVE',
  ARCH = 'ARCH',
  STACK = 'STACK',
  STUMP = 'STUMP'
}

export interface StageDetails {
  id: FormationStage;
  title: string;
  description: string;
  processes: string[];
  geologyNote: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
