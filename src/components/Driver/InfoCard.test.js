import React from 'react';
import { render } from '@testing-library/react';

import InfoCard from './InfoCard';

test('render info card', () => {
  const label = 'Nama Driver';
  const text = 'Faiz';
  const { getByText } = render(<InfoCard label={label} text={text} />);

  expect(getByText(label)).toBeInTheDocument();
  expect(getByText(text)).toBeInTheDocument();
});
