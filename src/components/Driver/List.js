import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Card from './Card';

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

const List = () => (
  <Container>
    <Card
      id="KOB209"
      name="Jonathan Smith"
      phone="0822 8281 7733"
      schedule={days.join(', ')}
      percentage={63}
    />
    <Card
      id="KOB209"
      name="Jonathan Smith"
      phone="0822 8281 7733"
      schedule={days.join(', ')}
      percentage={30}
    />
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
