import React from 'react';
import { GraphQLError } from 'graphql';

import { render, fireEvent, waitFor } from '../../utils/test-utils';
import AddDriver from './AddDriver';
import { ADD_DRIVER } from '../../modules/query';

const mockData = {
  id: 'ABCD',
  name: 'Faiz',
  phone_number: '+62282817744',
  schedule: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
  percentage: 0,
};

const successMock = {
  request: {
    query: ADD_DRIVER,
  },
  result: {
    data: {
      success: true,
      message: 'Successfully',
      driver: mockData,
    },
  },
};

const errorMock = {
  request: {
    query: ADD_DRIVER,
  },
  error: new Error('Oops'),
};

describe('test add driver modal', () => {
  test('should add new driver and give visual feedback', async () => {
    const { getByTestId, getByText, findAllByText, getByLabelText } = render(
      <AddDriver apolloMockForTestOnly={[successMock]} />
    );

    // expect the form is in the document
    expect(getByTestId('driver-form')).toBeInTheDocument();

    // simulate submit without filling the form
    const btnSubmit = getByText(/submit/i);
    fireEvent.click(btnSubmit);

    // we expect required message appear on all 2 field
    const requiredErrMessages = await findAllByText(/required/i);
    expect(requiredErrMessages.length).toBe(2);

    // insert name and phone number
    fireEvent.change(getByLabelText('Nama Driver'), {
      target: { value: 'Faiz' },
    });
    fireEvent.change(getByLabelText('Nomor Telepon'), {
      target: { value: '082282817744' },
    });

    fireEvent.click(btnSubmit);

    // we expect phone number inserted does not meet correct format
    await waitFor(() => expect(getByText(/incorrect/i)).toBeInTheDocument());

    // we change it to correct format
    fireEvent.change(getByLabelText('Nomor Telepon'), {
      target: { value: '+6282282817744' },
    });

    fireEvent.click(btnSubmit);

    // should show success page
    await waitFor(() => expect(getByText(/success/i)).toBeInTheDocument());
  });

  test('should show error UI', async () => {
    const { getByTestId, getByText, getByLabelText } = render(
      <AddDriver apolloMockForTestOnly={[errorMock]} />
    );

    // insert name and phone number at first
    // because the validation already tested above
    fireEvent.change(getByLabelText('Nama Driver'), {
      target: { value: 'Faiz' },
    });
    fireEvent.change(getByLabelText('Nomor Telepon'), {
      target: { value: '+6282282817744' },
    });

    const btnSubmit = getByText(/submit/i);
    fireEvent.click(btnSubmit);

    await waitFor(() =>
      expect(getByTestId('mutation-alert')).toBeInTheDocument()
    );
  });
});
