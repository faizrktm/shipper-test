import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectColor } from '../../helper/theme';

/**
 *
 * @param {node} icon
 * @param {string} label
 * @param {string} className used when you override this component style with styled component
 *
 * The rest of the props indicated by spread operator is the
 * initial props from input itself, ex: value, onChange, etc
 */
const TextInput = forwardRef(({ icon, className, ...props }, ref) => (
  <Container className={className}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <Input type="text" {...props} data-testid="text-input" ref={ref} />
  </Container>
));

TextInput.defaultProps = {
  icon: null,
  className: '',
};

TextInput.propTypes = {
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default TextInput;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  border: 1px solid ${selectColor('border')};
`;

const Input = styled.input`
  flex: 1;
`;
