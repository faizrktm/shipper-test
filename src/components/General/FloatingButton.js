import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectColor } from '../../helper/theme';

/**
 *
 * @param {node} icon
 *
 * The rest of the props indicated by spread operator is the
 * initial props from button itself, ex: onClick, type, etc.
 */
const FloatingButton = ({ icon, ...props }) => (
  <Container {...props}>{icon}</Container>
);

FloatingButton.propTypes = {
  icon: PropTypes.node.isRequired,
};

const Container = styled.button`
  padding: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => selectColor(color || 'brand')};
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FloatingButton;
