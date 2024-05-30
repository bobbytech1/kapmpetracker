import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'HelveticaNeueBlack': require('../assets/fonts/HelveticaNeueBlack.otf'),
        'HelveticaNeueBold': require('../assets/fonts/HelveticaNeueBold.otf'),
        'HelveticaNeueLight': require('../assets/fonts/HelveticaNeueLight.otf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};
