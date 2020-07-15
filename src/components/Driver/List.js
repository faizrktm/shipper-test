import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Card from './Card';

const List = () => (
  <Container>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Container>
);

export default List;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;
  padding: 1rem 0;

  ${breakpoint('tablet')`
    grid-template-columns: auto auto;
  `}

  ${breakpoint('desktop')`
    grid-template-columns: auto auto auto auto;
  `}
`;
