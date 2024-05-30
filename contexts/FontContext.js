import React, { createContext, useContext } from 'react';
import { useCustomFonts } from '../hooks/useCustomFonts';

const FontContext = createContext(false);

export const FontProvider = ({ children }) => {
  const fontsLoaded = useCustomFonts();

  return (
    <FontContext.Provider value={fontsLoaded}>
      {children}
    </FontContext.Provider>
  );
};

export const useFontContext = () => useContext(FontContext);
