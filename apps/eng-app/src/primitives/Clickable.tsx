import { createElement, forwardRef, MouseEventHandler, ReactNode } from 'react';
import classnames from 'classnames';
import { UIAttribute, UIClassnames } from '@english/shared-models';

type Props = {
  tag?: 'button' | 'div' | 'span' | 'label' | 'li';
  onClick: MouseEventHandler;
  children: ReactNode;
  isDisabled?: boolean;
  className?: UIClassnames;
  attrs?: UIAttribute;
};

export const Clickable = forwardRef(
  (
    { tag = 'button', isDisabled, className, children, attrs, onClick }: Props,
    ref,
  ) => {
    return createElement(
      tag,
      {
        ...attrs,
        disabled: isDisabled,
        className: classnames(className),
        onClick: onClick,
        ref,
      },
      children,
    );
  },
);
