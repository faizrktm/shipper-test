import React from 'react';
import styled from 'styled-components';
import { selectColor } from '../../helper/theme';

const TextInput = ({ icon, className, ...props }) => (
  <Container className={className}>
    {icon && (
      <IconWrapper>
        {icon}
      </IconWrapper>
    )}
    <input type="text" {...props} />
  </Container>
);

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
