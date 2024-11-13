import { AllHTMLAttributes } from 'react';

export type UIClassnames =
  | string
  | Array<string | boolean | undefined | null | object>;

export type UIAttribute<T extends HTMLElement = HTMLElement> =
  AllHTMLAttributes<T> & {
    [p: `data-${string}`]: string | undefined;
  };
