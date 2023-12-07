
import React, { createContext, useContext, useState } from 'react';

const ResponsavelContext = createContext();

export const useResponsavel = () => {
  const context = useContext(ResponsavelContext);
  if (!context) {
    throw new Error('useResponsavel deve ser usado dentro de ResponsavelProvider');
  }
  return context;
};

export const ResponsavelProvider = ({ children }) => {
  const [responsavel, setResponsavel] = useState({
    nome: '',
    badge: '',
  });

  const updateResponsavel = (nome, badge) => {
    setResponsavel({ nome, badge });
  };

  return (
    <ResponsavelContext.Provider value={{ responsavel, updateResponsavel }}>
      {children}
    </ResponsavelContext.Provider>
  );
};