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

const mocks = {
  request: {
    query: GET_DRIVERS,
  },
  result: {
    data: {
      drivers: [performant, lessPerformant],
    },
  },
};

const errorMocks = {
  request: {
    query: GET_DRIVERS,
  },
  error: new Error('Oops something went wrong'),
};

describe('driver page integration test', () => {
  test('success render drivers data', async () => {
    const { getByTestId, getByText } = render(
      <Driver apolloMockForTestOnly={[mocks]} />
    );

    // expect loading UI shown
    expect(getByText(/loading/i)).toBeInTheDocument();

    // wait until next render
    await waitFor(() => screen.getByTestId('driver-list'));

    // expect drivers data rendered successfully
    expect(getByTestId('driver-list')).not.toBeEmptyDOMElement();
  });

  test('show error UI', async () => {
    const { getByText } = render(
      <Driver apolloMockForTestOnly={[errorMocks]} />
    );

    // wait until next render and expect error from query
    await waitFor(() =>
      expect(getByText(/something went wrong/i)).toBeInTheDocument()
    );
  });
});
