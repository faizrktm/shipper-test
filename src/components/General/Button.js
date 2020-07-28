import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectColor } from '../../helper/theme';
import Text from './Text';

/**
 *
 * @param {node} icon
 * @param {string} label
 * @param {string} className used when you override this component style with styled component
 *
 * The rest of the props indicated by spread operator is the
 * initial props from button itself, ex: onClick, type, etc.
 */
const Button = ({ icon, label, className, fill, ...props }) => (
  <Container fill={fill.toString()} className={className} {...props}>
    <Text color="white" weight="bold" size="small">
      {label}
    </Text>
    {icon && <IconWrapper>{icon}</IconWrapper>}
  </Container>
);

Button.defaultProps = {
  icon: null,
  className: '',
  fill: false,
};

Button.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.bool,
};

export default Button;

const IconWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 0.25rem;
  background-color: ${({ color }) => selectColor(color || 'brand')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fill }) => (fill === 'true' ? '100%' : 'auto')};

  &:hover {
    opacity: 0.8;
  }
`;
