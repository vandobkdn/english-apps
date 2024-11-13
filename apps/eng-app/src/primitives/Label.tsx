import { ReactNode } from 'react';
import { Text } from './Text';

type Props = {
  children: ReactNode;
  htmlFor: string;
  isRequired?: boolean;
};

export const Label = ({ children, isRequired, htmlFor }: Props) => (
  <Text className="label" tag="label" attrs={{ htmlFor: htmlFor }}>
    {children}
    {!isRequired && <Text tag="small">(optional)</Text>}
  </Text>
);
