import { useId, useState } from 'react';
import chroma from 'chroma-js';

import Select, { MultiValue, StylesConfig } from 'react-select';
import { ColorOption } from '@english/shared-models';
import { Label, View } from '../../primitives';

const colorStyles: StylesConfig<ColorOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

type Props = {
  name: string;
  label?: string;
  options: ColorOption[];
  defaultValues?: ColorOption[];
  isRequired?: boolean;
  onChange: (value: string[]) => void;
};

export const FieldMultiSelect = ({
  name,
  label,
  options,
  defaultValues = [],
  isRequired,
  onChange,
}: Props) => {
  const id = useId();

  const [values, setValues] = useState(defaultValues);

  const handleOnChange = (values: MultiValue<ColorOption>) => {
    setValues(values as ColorOption[]);
    onChange((values || []).map(({ value }) => value));
  };

  console.log('options', options);

  return (
    <View>
      <Label isRequired={isRequired} htmlFor={`lab-${id}`}>
        {label}
      </Label>
      <Select
        id={`lab-${id}`}
        name={name}
        closeMenuOnSelect={false}
        defaultValue={defaultValues}
        isMulti
        options={options}
        styles={colorStyles}
        value={values}
        onChange={handleOnChange}
      />
    </View>
  );
};
