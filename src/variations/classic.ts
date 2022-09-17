import { Theme, ThemeColors, ThemeLevels, ThemeUi } from '../typing';

const blackUI = (primary: string): ThemeUi => {
  return {
    primary,
    primaryalt: '#191c21',
    uiborder: '#000000',
    uibackground: '#080709',
    uibackgroundalt: '#080709',
    default: '#ced0ce',
    defaultMain: '#c3b299',
    defaultalt: '#929487',
  };
};

const blackColors: ThemeColors = {
  blue: '#62b6cb',
  green: '#52b788',
  greenAlt: '#cbdfbd',
  orange: '#ffbf81',
  pink: '#b892ff',
  purple: '#7d8cc4',
  red: '#f94144',
  salmon: '#f4845f',
  turquoize: '#a596d3',
  yellow: '#f6bd60',
};

const blackLevels: ThemeLevels = {
  danger: '#fe5f55',
  success: '#52b788',
  warning: '#f6bd60',
  info: '#62b6cb',
};

export const classic: Theme = {
  ui: blackUI('#ffa3a5'),
  colors: blackColors,
  levels: blackLevels,
};
