/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// Vibrant Color Palette
const palette = {
  primary: '#FF5722',   // Bright Orange
  secondary: '#00BCD4', // Vivid Teal
  accent: '#FFEB3B',    // Electric Yellow
  background: '#FAFAFA', // Off-white
  surface: '#FFFFFF',
  text: '#212121',
  textSecondary: '#757575',
  error: '#e74c3c',
};

export const Colors = {
  light: {
    text: palette.text,
    background: palette.background,
    tint: palette.primary,
    icon: palette.secondary,
    tabIconDefault: palette.textSecondary,
    tabIconSelected: palette.primary,
    // Semantic aliases
    primary: palette.primary,
    secondary: palette.secondary,
    accent: palette.accent,
    card: palette.surface,
  },
  dark: {
    text: '#ECEDEE',
    background: '#121212',
    tint: palette.primary,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: palette.primary,
    // Semantic aliases
    primary: palette.primary,
    secondary: palette.secondary,
    accent: palette.accent,
    card: '#1E1E1E',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
