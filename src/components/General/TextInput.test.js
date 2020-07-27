import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TextInput from './TextInput';

test('simulate input change', () => {
  const onChange = jest.fn();
  const { getByTestId } = render(<TextInput onChange={onChange} />);

  fireEvent.change(getByTestId('text-input'), { target: { value: 'budi' } });

  expect(onChange).toHaveBeenCalled();
  expect(getByTestId('text-input')).toHaveValue('budi');
});
