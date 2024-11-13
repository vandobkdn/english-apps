import {
  CATEGORIES_OPTIONS,
  LEVELS_OPTIONS,
  Word,
} from '@english/shared-models';
import { FormConfigs } from '../../hooks/useForm';
import { Form } from '../Form';
import { Button } from '../Button';
import { View } from '../../primitives';
import { FieldArrays, FieldMultiSelect, FieldText } from '../Fields';

import styles from './Form.module.scss';

const formConfig: FormConfigs<Word> = {
  fields: [
    {
      name: 'word',
      label: 'New Word',
      validator: (val) => {
        if (!val) return 'This field is required!';
      },
    },
    {
      name: 'pron',
      label: 'Pron',
      validator: (val) => {
        if (!val) return 'This field is required!';
      },
    },
    {
      name: 'translation',
      label: 'Translation',
      validator: (_, word: Word) => {
        if (!word?.translation?.en) return 'This field is required!';
      },
    },
    {
      name: 'examples',
      label: 'Examples',
      validator: (_, word: Word) => {
        if (word['examples']?.length === 0) return 'This field is required!';
      },
    },
  ],
};

const initialValues: Word = {
  word: '',
  pron: '',
  translation: {
    en: '',
  },
  examples: [],
};

export const AddWordForm = () => {
  return (
    <Form
      name="Add Word Form"
      formConfig={formConfig}
      initValue={initialValues}
      onSubmit={(val) => console.log('val', val)}
    >
      {({ value, updateField, isValid }) => (
        <View className={[styles.addWordForm]}>
          <View className={styles.leftItems}>
            <FieldText
              name="word"
              label="New Word"
              isRequired
              onChange={(val) => updateField('word', val)}
              value={value.word}
            />

            <FieldText
              name="pron"
              label="Pronunciation"
              isRequired
              onChange={(val) => updateField('pron', val)}
              value={value.pron}
            />

            <FieldText
              name="translation"
              label="Translation English"
              isRequired
              onChange={(val) =>
                updateField('translation', { ...value.translation, en: val })
              }
              value={value.translation.en}
            />

            <FieldText
              name="translation"
              label="Translation Vietnamese"
              onChange={(val) =>
                updateField('translation', { ...value.translation, vi: val })
              }
              value={value.translation.vi}
            />

            <FieldText
              name="audio"
              label="Audio Link"
              isRequired={false}
              onChange={(val) => updateField('audio', val)}
              value={value.audio}
            />

            <FieldMultiSelect
              name="levels"
              label="Levels"
              options={LEVELS_OPTIONS}
              isRequired={false}
              onChange={(val) => updateField('levels', val)}
            />
          </View>

          <View className={styles.rightItems}>
            <FieldArrays
              name="examples"
              label="Examples"
              isRequired
              values={value.examples}
              onChange={(val) => updateField('examples', val)}
            />

            <FieldArrays
              name="synonyms"
              label="Synonyms"
              isRequired={false}
              values={value.synonyms || []}
              onChange={(val) => updateField('synonyms', val)}
            />

            <FieldArrays
              name="antonyms"
              label="Antonyms"
              isRequired={false}
              values={value.antonyms || []}
              onChange={(val) => updateField('antonyms', val)}
            />

            <FieldMultiSelect
              name="subjects"
              label="Subjects"
              options={CATEGORIES_OPTIONS}
              isRequired={false}
              onChange={(val) => updateField('subjects', val)}
            />
          </View>

          <Button
            className={styles.submit}
            skin="primary"
            type="submit"
            isDisabled={!isValid}
          >
            Submit
          </Button>
        </View>
      )}
    </Form>
  );
};
