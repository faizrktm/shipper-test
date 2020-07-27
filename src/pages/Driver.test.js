import React from 'react';
import { render, waitFor, screen } from '../utils/test-utils';

import Driver from './Driver';
import { GET_DRIVERS } from '../modules/query';
import Card from '../components/Driver/Card';
import theme from '../config/theme';

const performant = {
  id: 'KOB209',
  name: 'Faiz',
  phone_number: '+62282817744',
  schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
  percentage: 100,
};

const lessPerformant = {
  id: 'KOB208',
  name: 'Faiz',
  phone_number: '+62282817744',
  schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
  percentage: 30,
};

const mocks = [
  {
    request: {
      query: GET_DRIVERS,
    },
    result: {
      data: {
        drivers: [performant, lessPerformant],
      },
    },
  },
];

describe('driver page integration test', () => {
  test('success render drivers data', async () => {
    const { getByTestId } = render(<Driver apolloMockForTestOnly={mocks} />);

    await waitFor(() => screen.getByTestId('driver-list'));

    expect(getByTestId('driver-list')).not.toBeEmptyDOMElement();
  });

  test('render performant driver card', () => {
    const { queryByRole } = render(
      <Card
        {...performant}
        phone={performant.phone_number}
        schedule={performant.schedule.join(', ')}
      />
    );

    expect(queryByRole('alert')).toBeNull();
  });

  test('render less performant driver card', () => {
    const { getByText, getByRole, queryByRole } = render(
      <Card
        {...lessPerformant}
        phone={lessPerformant.phone_number}
        schedule={lessPerformant.schedule.join(', ')}
      />
    );

    expect(queryByRole('alert')).not.toBeNull();
    expect(getByRole('header')).toHaveStyle({
      backgroundColor: theme.colors.brand,
    });
    expect(getByText(lessPerformant.id)).toHaveStyle({
      color: 'white',
    });
    expect(getByText(/id/i)).toHaveStyle({
      color: 'white',
    });
  });
});
