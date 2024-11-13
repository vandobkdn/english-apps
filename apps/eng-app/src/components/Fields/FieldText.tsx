import { useId } from 'react';
import { Field, Label, View } from '../../primitives';

type Props = {
  name: string;
  label: string;
  onChange: (val: string) => void;
  value?: string;
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

export const FieldText = ({
  name,
  label,
  onChange,
  value = '',
  className,
  placeholder,
  isRequired,
  isDisabled,
}: Props) => {
  const id = useId();

  return (
    <View className={['fieldText', className]}>
      <Label isRequired={isRequired} htmlFor={`lab-${id}`}>
        {label}
      </Label>
      <Field
        type="text"
        name={name}
        onChange={(val) => onChange(val)}
        isDisabled={isDisabled}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};
