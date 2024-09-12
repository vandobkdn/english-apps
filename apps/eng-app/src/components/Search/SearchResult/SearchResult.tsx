import { useSearchResults } from '../../../hooks';

import './SearchResult.scss';

import { ResultLayout } from './SearchResultLayout';

export const SearchResult = () => {
  const [exact, relates] = useSearchResults('word');

  return <ResultLayout exact={exact} relates={relates} />;
};
