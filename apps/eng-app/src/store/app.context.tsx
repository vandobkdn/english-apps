import React, { useCallback } from 'react';
import { Navigation } from '@english/shared-models';

type State = {
  activeNav: Navigation;
  isCardUp: boolean;
};

type Action =
  | { type: 'SET_ACTIVE_NAV'; payload: Navigation }
  | { type: 'FLIP_CARD'; payload: 'up' | 'down' };

const Context = React.createContext<
  | {
      state: State;
      setActiveNav: (activeNav: Navigation) => void;
      flipCard: (cardFace: 'up' | 'down') => void;
    }
  | undefined
>(undefined);

const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'SET_ACTIVE_NAV': {
      return {
        ...state,
        activeNav: payload,
      };
    }
    case 'FLIP_CARD': {
      return {
        ...state,
        isCardUp: payload === 'up',
      };
    }

    default:
      return state;
  }
};

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    activeNav: 'Learning Words',
    isCardUp: true,
  });

  const setActiveNav = useCallback((activeNav: Navigation) => {
    dispatch({ type: 'SET_ACTIVE_NAV', payload: activeNav });
  }, []);

  const flipCard = useCallback((cardFace: 'up' | 'down') => {
    dispatch({ type: 'FLIP_CARD', payload: cardFace });
  }, []);

  return (
    <Context.Provider value={{ state, setActiveNav, flipCard }}>
      {children}
    </Context.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export { AppContextProvider, useAppContext };
