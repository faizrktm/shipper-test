import React from 'react';
import styled from 'styled-components';

const Card = ({ children }) => <Container>{children}</Container>;

export default Card;

const Container = styled.div`
  background-color: white;
  border-radius: 0.25rem;
`;
