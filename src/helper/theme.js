import theme from '../config/theme';

const textSizes = {
  small: '0.75rem',
  medium: '1rem',
  large: '1.5rem',
  xlarge: '2rem',
};

export const selectColor = (color) => theme.colors[color] || color;

export const getTextSize = (size) => {
  return textSizes[size] || textSizes['medium'];
};
