import { Word } from '@english/shared-models';

import { View, Clickable, Text, Image } from '../../primitives';

import './card.scss';
import { useAppContext } from '../../app.context';

export const Card = ({ word, examples, pron }: Word) => {
  const {
    state: { isCardUp },
    flipCard,
  } = useAppContext();

  if (!isCardUp) {
    return (
      <Clickable
        tag="div"
        onClick={() => flipCard('up')}
        className="card card-down border-red"
      >
        <Text className="card-text">{word}</Text>
        <Text className="card-text">{pron}</Text>
        <View className="card-image">
          <Image src="images.png" alt={`${word}`} />
        </View>
      </Clickable>
    );
  }

  return (
    <Clickable
      tag="div"
      onClick={() => flipCard('down')}
      className="card border-pink"
    >
      <Text className="card-text">{word}</Text>
      <View className="card-image">
        <Image src="images.png" alt={`${word}`} />
      </View>
    </Clickable>
  );
};
