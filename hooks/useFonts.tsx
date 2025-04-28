import * as Font from 'expo-font';

export const useCustomFonts = () => {
  return Font.loadAsync({
    'Zilla-Slab': require('../assets/fonts/ZillaSlab-Regular.ttf'),
    // Add more styles if needed
    // 'Zilla-Slab-Bold': require('../assets/fonts/ZillaSlab-Bold.ttf'),
  });
};
