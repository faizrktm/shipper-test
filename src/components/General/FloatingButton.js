import React from 'react';
import styled from 'styled-components';

import { selectColor } from '../../helper/theme';

const FloatingButton = ({ icon, ...props }) => (
  <Container {...props}>{icon}</Container>
);

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
