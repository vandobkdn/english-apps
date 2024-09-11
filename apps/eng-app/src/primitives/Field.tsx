import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  type?: 'text' | 'number';
  tag?: 'input' | 'textarea';
  isDisabled?: boolean;
  className?: string;
  attrs?: HTMLAttributes<HTMLImageElement> & {
    [p: `${string}`]: string | undefined;
  };
};

export const Field = forwardRef(
  (
    { type = 'text', tag = 'input', isDisabled, className, attrs }: Props,
    ref,
  ) => {
    return createElement(tag, {
      ...attrs,
      type,
      disabled: isDisabled,
      className: classnames(className),
      ref,
    });
  },
);
