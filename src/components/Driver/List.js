import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Card from './Card';

const List = ({ drivers }) => {
  return (
    <Container>
      {drivers.map(({
        id,
        name,
        phone_number,
        schedule,
        percentage,
      }) => (
        <Card
          key={id}
          id={id}
          name={name}
          phone={phone_number}
          schedule={schedule.join(', ')}
          percentage={percentage}
        />
      ))}
    </Container>
  )
};

export default List;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  padding: 1rem 0;

  ${breakpoint('tablet')`
    grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  `}

  ${breakpoint('desktop')`
    grid-template-columns: calc(25% - 0.75rem) calc(25% - 0.75rem) calc(25% - 0.75rem) calc(25% - 0.75rem);
  `}
`;
