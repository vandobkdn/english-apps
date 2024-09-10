export type Word = {
  word: string;
  pron: string;
  translation: Translation;
  examples: string[];
};

export type Translation = {
  en: string;
  vi?: string;
};
