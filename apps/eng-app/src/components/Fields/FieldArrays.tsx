import { useState } from 'react';
import { View } from '../../primitives';
import { Button } from '../Button';
import { FieldText } from './FieldText';

type Props = {
  name: string;
  label: string;
  onChange: (values: string[]) => void;
  values: string[];
  className?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

export const FieldArrays = ({
  name,
  label,
  onChange,
  values = [],
  className,
  isDisabled,
  isRequired,
}: Props) => {
  const [tempValues, setTempValues] = useState<string[]>(values);

  const handleChange = (val: string, idx: number) => {
    const newValues = [...tempValues];
    newValues[idx] = val;

    onChange([...newValues]);
    setTempValues([...newValues]);
  };

  return (
    <View className={['fieldArrays', className]}>
      <Button
        onClick={() => !isDisabled && setTempValues([...tempValues, ''])}
        skin={'secondary'}
      >
        {`+ ${label}`} {`${isRequired ? '' : '(Optional)'}`}
      </Button>

      {tempValues.map((value, idx) => (
        <FieldText
          key={idx}
          name={name}
          label={`${label} ${idx + 1}`}
          value={value}
          isRequired={isRequired}
          onChange={(val) => handleChange(val, idx)}
        />
      ))}
    </View>
  );
};
