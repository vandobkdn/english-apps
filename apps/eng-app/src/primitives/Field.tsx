import { ChangeEvent, createElement, forwardRef, HTMLAttributes } from 'react';
import classnames from 'classnames';

type Props = {
  type?: 'text' | 'radio' | 'checkbox';
  name?: string;
  value?: string;
  tag?: 'input' | 'textarea';
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isChecked?: boolean;
  placeholder?: string;
  className?: string;
  attrs?: HTMLAttributes<HTMLImageElement> & {
    [p: `${string}`]: string | undefined;
  };
  onChange?: (val: string) => void;
};

export const Field = forwardRef(
  (
    {
      type = 'text',
      tag = 'input',
      isDisabled,
      className,
      attrs,
      isReadOnly,
      isChecked,
      placeholder,
      value,
      onChange = () => null,
    }: Props,
    ref,
  ) => {
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      onChange(evt.target.value);
    };

    return createElement(tag, {
      ...attrs,
      type,
      disabled: isDisabled,
      className: classnames(className),
      readOnly: isReadOnly,
      placeholder,
      value,
      checked: isChecked,
      ref,
      onChange: handleChange,
    });
  },
);
