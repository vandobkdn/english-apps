import { TAGS } from './setting';

type Level = 'beginner' | 'intermediate' | 'advanced';
type Stage = 'New' | 'I Know It' | 'Mastered It';

export type Word = {
  word: string;
  pron: string;
  translation: Translation;
  examples: string[];
  audio?: string;
  levels?: Level[];
  synonyms?: string[]; // A list of words with similar meanings.
  antonyms?: string[]; // A list of words with opposite meanings.
  subjects?: (typeof TAGS)[]; // list of categories
};

export type MyWord = {
  stage: Stage;
  lastTouch: number; // time from last learn the word
  isLearning: boolean; // true for learning
  progress: number; // 0 - 100
} & Word;

export type Translation = {
  en: string;
  vi?: string;
};

export type Playlist = {
  name: string;
  subject: string;
  words: Word[];
};
