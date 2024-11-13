import { Routes, Route } from 'react-router-dom';

import { View } from './primitives';
import {
  Header,
  Card,
  FieldSearch,
  WordItem,
  List,
  SearchResult,
} from './components';
import {
  HomePage,
  ListWordPage,
  MyWordPage,
  LearningWordPage,
  AddNewWordPage,
} from './pages';
import { useAppContext, FormProvider } from './store';
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
        <FormProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list-words" element={<ListWordPage />} />
            <Route path="/my-words" element={<MyWordPage />} />
            <Route path="/learn-words" element={<LearningWordPage />} />
            <Route path="/add-new-words" element={<AddNewWordPage />} />
          </Routes>
        </FormProvider>
      </View>
    </View>
  );
};

export default App;
