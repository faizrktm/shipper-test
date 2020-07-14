import theme from '../config/theme';

const textSizes = {
  small: '0.8rem',
  medium: '1rem',
  large: '1.5rem',
  xlarge: '2rem',
};

const imgSizes = {
  small: '2.5rem',
  medium: '5rem',
  large: '7.5rem',
  xlarge: '10rem',
};

export const selectColor = (color) => theme.colors[color] || color;

export const getTextSize = (size) => {
  return textSizes[size] || textSizes['medium'];
};

export const getImageSize = (size) => {
  return imgSizes[size] || imgSizes['medium'];
};
