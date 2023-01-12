import { theme as themeLight, themeBlue, themeDark, ThemeTypes } from '../src/shared/theme';

export interface IStoryThemeProps {
  themesAvailable: ThemeTypes[];
  theme: ThemeTypeIndex;
}

type ThemeTypeIndex = 0 | 1 | 2;

export const ThemesArgs = {
  themesAvailable: [themeLight, themeBlue, themeDark] as ThemeTypes[],
  theme: 0 as ThemeTypeIndex,
};
