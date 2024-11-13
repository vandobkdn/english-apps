import { createElement, HTMLAttributes, ReactNode, forwardRef } from 'react';
import classnames from 'classnames';
import { UIClassnames } from '@english/shared-models';

type Props = {
  children: ReactNode;
  className?: UIClassnames;
  attrs?: HTMLAttributes<HTMLElement> & {
    [p: `${string}`]: string;
  };
  tag?: 'div' | 'nav' | 'span' | 'main' | 'ul' | 'li';
};

export const View = ({ attrs, children, className, tag = 'div' }: Props) => {
  return createElement(
    tag,
    { ...attrs, className: classnames(className) },
    children,
  );
};

export const ViewRef = forwardRef(
  ({ attrs, children, className, tag = 'div' }: Props, ref) => {
    return createElement(
      tag,
      { ...attrs, ref, className: classnames(className) },
      children,
    );
  },
);
