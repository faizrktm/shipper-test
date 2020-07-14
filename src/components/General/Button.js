import React from 'react';
import styled from 'styled-components';

import { selectColor } from '../../helper/theme';
import Text from './Text';

const Button = ({ icon, label, ...props }) => (
  <Container {...props}>
    <Text color="white" weight="bold" size="small">
      {label}
    </Text>
    {icon && <IconWrapper>{icon}</IconWrapper>}
  </Container>
);

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

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
