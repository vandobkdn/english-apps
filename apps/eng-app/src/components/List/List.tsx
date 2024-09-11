import { View } from '../../primitives';

import { WordItem } from './Item';

import './List.scss';

const WORDS = [
  {
    word: 'abandon',
    pron: '/əˈbændən/',
    translation: {
      en: 'to leave behind or give up completely',
      vi: 'bị bỏ rơi',
    },
    examples: ['They had to abandon the car because it was stuck in the snow.'],
  },
  {
    word: 'abandon',
    pron: '/əˈbændən/',
    translation: {
      en: 'to leave behind or give up completely',
      vi: 'bị bỏ rơi',
    },
    examples: ['They had to abandon the car because it was stuck in the snow.'],
  },
  {
    word: 'abandon',
    pron: '/əˈbændən/',
    translation: {
      en: 'to leave behind or give up completely',
      vi: 'bị bỏ rơi',
    },
    examples: ['They had to abandon the car because it was stuck in the snow.'],
  },
  {
    word: 'abandon',
    pron: '/əˈbændən/',
    translation: {
      en: 'to leave behind or give up completely',
      vi: 'bị bỏ rơi',
    },
    examples: ['They had to abandon the car because it was stuck in the snow.'],
  },
  {
    word: 'abandon',
    pron: '/əˈbændən/',
    translation: {
      en: 'to leave behind or give up completely',
      vi: 'bị bỏ rơi',
    },
    examples: ['They had to abandon the car because it was stuck in the snow.'],
  },
  {
    word: 'abandon',
    pron: '/əˈbændən/',
    translation: {
      en: 'to leave behind or give up completely',
      vi: 'bị bỏ rơi',
    },
    examples: ['They had to abandon the car because it was stuck in the snow.'],
  },
];

export const List = () => {
  return (
    <View className="list-words">
      {WORDS.map((word) => (
        <WordItem {...word} />
      ))}
    </View>
  );
};
