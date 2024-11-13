import { MouseEventHandler, ReactNode } from 'react';
import { UIAttribute, UIClassnames } from '@english/shared-models';

import { Clickable } from '../../primitives';
import styles from './Button.module.scss';

type Props = {
  skin: 'primary' | 'secondary' | 'none';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
  children?: ReactNode;
  shape?: 'round';
  isDisabled?: boolean;
  isLoading?: boolean;
  attrs?: UIAttribute;
  className?: UIClassnames;
};

export const Button = ({
  type = 'button',
  skin,
  children,
  shape,
  attrs,
  isDisabled,
  isLoading,
  className,
  onClick = () => null,
}: Props) => (
  <Clickable
    isDisabled={isDisabled}
    tag={'button'}
    attrs={{ type, ...attrs }}
    onClick={onClick}
    className={[
      styles['button'],
      styles[skin],
      shape && styles[shape],
      isLoading && styles['loading'],
      className,
    ]}
  >
    {children}
  </Clickable>
);
