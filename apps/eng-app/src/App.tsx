import { View } from './primitives';
import {
  Header,
  Card,
  FieldSearch,
  WordItem,
  List,
  SearchResult,
} from './components';
import { useAppContext } from './app.context';
import './app.scss';

const WORD = {
  word: 'abandon',
  pron: '/əˈbændən/',
  translation: {
    en: 'to leave behind or give up completely',
    vi: 'bị bỏ rơi',
  },
  examples: ['They had to abandon the car because it was stuck in the snow.'],
};

const App = () => {
  const { state } = useAppContext();

  console.log('state', state);
  return (
    <View className="container">
      <Header />
      <View className="content" tag="main">
        <SearchResult />
      </View>
    </View>
  );
};

export default App;
