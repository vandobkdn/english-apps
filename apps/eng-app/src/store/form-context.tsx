import React from 'react';

type Action =
  | { type: 'INIT'; payload: { formName: string; value: any; index?: number } }
  | {
      type: 'UPDATE';
      payload: { formName: string; value: any; index?: number };
    }
  | { type: 'CLOSE'; payload: { formName: string } };

type State = {
  [formName: string]:
    | {
        formState: string;
        currentValue: any;
        index?: number;
      }
    | undefined;
};

const Context = React.createContext<
  | {
      state: State;
      initForm: (formName: string, value: any, index?: number) => void;
      updateForm: (formName: string, value: any, index?: number) => void;
      closeForm: (formName: string) => void;
    }
  | undefined
>(undefined);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INIT': {
      const { formName, value, index } = action.payload;
      return {
        ...state,
        [formName]: { formState: 'INIT', currentValue: value, index },
      };
    }
    case 'UPDATE': {
      const { formName, value, index } = action.payload;
      return {
        ...state,
        [formName]: { formState: 'UPDATE', currentValue: value, index },
      };
    }
    case 'CLOSE': {
      const { formName } = action.payload;
      return { ...state, [formName]: undefined };
    }
    default:
      return state;
  }
}

function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, {});

  const initForm = (formName: string, value: any, index?: number) => {
    dispatch({ type: 'INIT', payload: { formName, value, index } });
  };
  const updateForm = (formName: string, value: any, index?: number) => {
    dispatch({ type: 'UPDATE', payload: { formName, value, index } });
  };
  const closeForm = (formName: string) => {
    dispatch({ type: 'CLOSE', payload: { formName } });
  };

  return (
    <Context.Provider
      value={{
        state,
        initForm,
        updateForm,
        closeForm,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useFormContext() {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}

export { useFormContext, FormProvider };
