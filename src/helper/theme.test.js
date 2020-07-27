import {
  selectColor,
  getTextSize,
  getImageSize,
  textSizes,
  imgSizes,
} from './theme';

import theme from '../config/theme';

// selectColor
test('test available color', () => {
  const color = 'brand';
  expect(selectColor(color)).toBe(theme.colors[color]);
});

test('test unavailable color', () => {
  const color = 'black';
  expect(selectColor(color)).toBe(color);
});

// getTextSize
test('test available text size', () => {
  const size = 'small';
  expect(getTextSize(size)).toBe(textSizes[size]);
});

test('test unavailable text size', () => {
  expect(getTextSize()).toBe(textSizes['medium']);
});

// getImageSize
test('test available image size', () => {
  const size = 'small';
  expect(getImageSize(size)).toBe(imgSizes[size]);
});

test('test unavailable image size', () => {
  expect(getImageSize()).toBe(imgSizes['medium']);
});
