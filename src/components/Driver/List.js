import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Card from './Card';
import { ReduxerContext } from '../../modules/Reduxer';
import useDispatch from '../../modules/useDispatch';
import { fetchDriver } from '../../modules/driver';
import { Text } from '../General';

const List = () => {
  const { state: { data: { result } } } = useContext(ReduxerContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDriver());
  }, []);

  if(!result.length){
    return (
      <Container>
        <Text>No Data Found</Text>
      </Container>
    )
  }

  return (
    <Container>
      {result.map(({
        id,
        name,
        phone,
        schedule,
        percentage,
      }) => (
        <Card
          key={id}
          id={id}
          name={name}
          phone={phone}
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
