import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextInput from './TextInput';

test('simulate input change', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(<TextInput onChange={onChange} />);

  userEvent.type(getByTestId('text-input'), 'budi');

  expect(onChange).toHaveBeenCalled();
  expect(getByTestId('text-input')).toHaveValue('budi');
});
