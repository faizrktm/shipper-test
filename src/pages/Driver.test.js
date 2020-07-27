import React from 'react';
import { render, waitFor, screen } from '../utils/test-utils';

import Driver from './Driver';
import { GET_DRIVERS } from '../modules/query';

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
});
