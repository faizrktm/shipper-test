import React, { memo } from 'react';
import styled from 'styled-components';

import { Text } from '../General';

const InfoCard = ({ label, text }) => (
  <Wrapper>
    <Title color="textMild" size="small">
      {label}
    </Title>
    <Text size="small">{text}</Text>
  </Wrapper>
);

export default memo(InfoCard);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Title = styled(Text)`
  margin-bottom: 0.5rem;
`;
