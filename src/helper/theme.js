import theme from '../config/theme';

export const sizes = ['small', 'medium', 'large', 'xlarge'];

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

/**
 *
 * @param {string} color indicate a color available from theme
 * If theme.colors[color] expression is undefined return any color as it is.
 * example: if passed color is hex, hsl, rgba, etc.
 */
export const selectColor = (color) => theme.colors[color] || color;

/**
 *
 * @param {string} size indicate a size available from textSizes
 * If textSizes[size] expression is undefined return medium size instead.
 */
export const getTextSize = (size) => {
  return textSizes[size] || textSizes['medium'];
};

/**
 *
 * @param {string} size indicate a size available from textSizes
 * If imgSizes[size] expression is undefined return medium size instead.
 */
export const getImageSize = (size) => {
  return imgSizes[size] || imgSizes['medium'];
};
