import { SearchTypes } from '@english/shared-models';
import { ReactNode, useEffect, useState } from 'react';

import { View, Text, Clickable } from '../primitives';

export const useSearchResults = (type: SearchTypes): [ReactNode, ReactNode] => {
  const [exact, setExact] = useState<ReactNode>(null);
  const [relates, setRelates] = useState<ReactNode>(null);

  useEffect(() => {
    setExact(
      <View className="exact-result">
        <View className="content">
          <Text tag="h1">word</Text>
          <Text tag="small">/əˈbændən/</Text>
          <Text>
            to leave behind or give up completely, to leave behind or give up
            completely, to leave behind or give up completely
          </Text>
        </View>
        <Clickable onClick={() => {}} tag="button">{`Explore`}</Clickable>
      </View>,
    );

    setRelates(
      <ul>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word</li>
        <li>Word </li>
        <li>Word</li>
      </ul>,
    );
  }, [type]);

  return [exact, relates];
};
