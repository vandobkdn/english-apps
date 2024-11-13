import { useEffect, useState } from 'react';

import { useFormContext } from '../store/form-context';

export type FormConfigs<T, K extends keyof T = keyof T> = {
  index?: number;
  fields: {
    label: string;
    name: K;
    validator: (value: T[K], valueMasterLang: T) => string | undefined;
  }[];
};

export type FormErrors<T, K extends keyof T> = {
  [fieldName in K]?: string | undefined;
};

export const useForm = <T, K extends keyof T>(
  name: string,
  initValue: T,
  configs: FormConfigs<T, K>,
): {
  errors: FormErrors<T, K>;
  formChanged: boolean;
  isValid: boolean;
  touched: { [fieldName in K]?: boolean };
  value: T;
  markAsTouched: (fieldName: K) => void;
  updateField: (fieldName: K, newValue: T[K]) => void;
} => {
  const { initForm, updateForm, closeForm } = useFormContext();

  const [errors, setErrors] = useState<{
    [fieldName in K]?: string | undefined;
  }>({});
  const [formChanged, setFormChanged] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState<{ [fieldName in K]?: boolean }>({});
  const [value, setValue] = useState<T>(initValue);

  useEffect(() => {
    setValue({ ...value, ...initValue });
    setIsValid(false);
    setFormChanged(false);
    setTouched({});
    setErrors({});
    initForm(name, initValue, configs.index);
    return () => {
      closeForm(name);
    };
  }, [initValue]);

  useEffect(() => {
    updateError(value);
    updateForm(name, value, configs.index);
  }, [value]);

  useEffect(() => {
    setIsValid(Object.values(errors).every((error) => !error));
  }, [errors]);

  const updateError = (value: T) => {
    if (!configs.fields) {
      return;
    }
    const errs: { [fieldName in K]?: string | undefined } = {};

    configs.fields.forEach(({ name, validator }) => {
      errs[name] = validator(value[name], value);
    });
    setErrors(errs);
  };

  const updateField = (fieldName: K, newValue: T[K]) => {
    if (value[fieldName] !== newValue) {
      setFormChanged(true);
    }
    markAsTouched(fieldName);
    setValue((oldValue) => {
      return { ...oldValue, [fieldName]: newValue };
    });
  };

  const markAsTouched = (fieldName: K) => {
    setTouched({ ...touched, [fieldName]: true });
  };

  return {
    errors,
    formChanged,
    isValid,
    touched,
    value,
    markAsTouched,
    updateField,
  };
};
