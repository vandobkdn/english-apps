import { ReactNode } from 'react';
import { View, Text, Clickable } from '../../../primitives';

import './SearchResult.scss';

export const ResultLayout = ({
  exact,
  relates,
}: {
  exact?: ReactNode;
  relates: ReactNode;
}) => {
  return (
    <View className="result-container">
      <View className={`result-titles ${!exact && 'single-column'}`}>
        {exact && <Text>Result</Text>}
        <Text>Related Results</Text>
      </View>
      <View className={`search-result ${!exact && 'single-column'}`}>
        {exact}
        <View className="related-results">{relates}</View>
      </View>
    </View>
  );
};
