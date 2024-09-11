import { useRef } from 'react';
import { View, ViewRef, Field } from '../../primitives';

import './FieldSearch.scss';

export const FieldSearch = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ViewRef ref={ref} className="field-search">
      <View tag="span" className="search-icon">
        &#128269;
      </View>
      <Field attrs={{ placeholder: 'Search...' }} className="search-input" />
    </ViewRef>
  );
};
