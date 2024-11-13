export type Navigation =
  | 'Word List'
  | 'My Words'
  | 'Learning Words'
  | 'Add Word';

export type SearchTypes = 'word' | 'playlist';

export type ColorOption = {
  value: string;
  label: string;
  color: string;
  isDisabled?: boolean;
  isFixed?: boolean;
};

export type Level = 'beginner' | 'intermediate' | 'advanced';
export type Stage = 'New' | 'I Know It' | 'Mastered It';
