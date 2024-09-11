import { useRef } from 'react';
import { ViewRef, Field } from '../../primitives';

import './FieldSearch.scss';

export const FieldSearch = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ViewRef ref={ref} className="field-search">
      <span className="search-icon">&#128269;</span>
      <Field attrs={{ placeholder: 'Search...' }} className="search-input" />
    </ViewRef>
  );
};
