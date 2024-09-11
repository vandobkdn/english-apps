import { Word } from '@english/shared-models';

import { View, Text } from '../../primitives';

import './List.scss';

export const WordItem = ({ word, pron, translation, examples }: Word) => {
  return (
    <View className="word-item">
      <View className="word">
        <View tag="span">&#127468;&#127463;</View>
        <Text>{word}</Text>
        <Text tag="small">({pron})</Text>
      </View>
      <Text className="example">{translation.en}</Text>
      <Text className="example">{examples}</Text>
    </View>
  );
};
