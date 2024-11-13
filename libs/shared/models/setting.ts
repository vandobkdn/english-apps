import { Navigation as NavType, ColorOption, Level } from './types';

export const NAV_ITEM: { [path: string]: NavType } = {
  'list-words': 'Word List',
  'my-words': 'My Words',
  'learn-words': 'Learning Words',
  'add-new-words': 'Add Word',
};

export const TAGS: string[] = [
  'Animals',
  'Plants',
  'Weather',
  'Seasons',
  'Landforms',
  'Science & Technology',
  'Health & Medicine',
  'Business',
  'Arts & Culture',
  'History',
  'Geography',
  'Government',
  'Sports',
  'Computing',
  'Technology',
  'Food',
  'Everyday Life',
  'Family',
  'Travel',
  'Cinema',
  'Art & Film',
  'Music',
  'Law',
  'TOEIC',
  'IELTS',
];

export const LEVELS: Level[] = ['beginner', 'intermediate', 'advanced'];

const COLORS = [
  '#00B8D9',
  '#0052CC',
  '#5243AA',
  '#FF5630',
  '#FF8B00',
  '#FFC400',
  '#36B37E',
  '#00875A',
  '#253858',
  '#666666',
];

export const CATEGORIES_OPTIONS: ColorOption[] = TAGS.map((tag) => {
  const idx = Math.floor(Math.random() * COLORS.length);
  return {
    value: tag,
    label: tag,
    color: COLORS[idx],
  };
});

export const LEVELS_OPTIONS: ColorOption[] = LEVELS.map((level) => {
  const idx = Math.floor(Math.random() * COLORS.length);
  return {
    value: level,
    label: level,
    color: COLORS[idx],
  };
});
