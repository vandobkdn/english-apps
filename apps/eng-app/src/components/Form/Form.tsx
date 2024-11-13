import { ReactNode, FormEvent } from 'react';
import { FormConfigs, useForm } from '../../hooks/useForm';

type FormProps<T, K extends keyof T> = {
  name: string;
  formConfig: FormConfigs<T, K>;
  children: (form: ReturnType<typeof useForm<T, K>>) => ReactNode;
  initValue: T;
  onSubmit: (value: T) => void;
  className?: string;
};

export const Form = <T, K extends keyof T>({
  name,
  formConfig,
  children,
  initValue,
  onSubmit,
  className,
}: FormProps<T, K>) => {
  const form = useForm(name, initValue, formConfig);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onSubmit(form.value);
  };

  return (
    <form className={className} onSubmit={(e) => handleSubmit(e)}>
      {children(form)}
    </form>
  );
};
