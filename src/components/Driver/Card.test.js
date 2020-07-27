import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';
import theme from '../../config/theme';

// Test card driver with percentage more than 50
test('render performant driver card', () => {
  const props = {
    id: '47e6c9b6-ceff-11ea-87d0-0242ac130003',
    name: 'Faiz',
    phone: 'Phone',
    schedule: 'Senin, Selasa, Rabu, Kamis',
    percentage: 80,
  };
  const { queryByRole } = render(<Card {...props} />);

  expect(queryByRole('alert')).toBeNull();
});

// Test card driver with percentage less than 50
test('render less performant driver card', () => {
  const props = {
    id: '47e6c9b6-ceff-11ea-87d0-0242ac130003',
    name: 'Faiz',
    phone: 'Phone',
    schedule: 'Senin, Selasa, Rabu, Kamis',
    percentage: 30,
  };
  const { getByText, getByRole, queryByRole } = render(<Card {...props} />);

  expect(queryByRole('alert')).not.toBeNull();
  expect(getByRole('header')).toHaveStyle({
    backgroundColor: theme.colors.brand,
  });
  expect(getByText(props.id)).toHaveStyle({
    color: 'white',
  });
  expect(getByText(/id/i)).toHaveStyle({
    color: 'white',
  });
});
