import React, { createContext, useState } from 'react';

// Initial state
const initialState = {
  showModal: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider
      value={{
        showModal: state.showModal,
        setState
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
