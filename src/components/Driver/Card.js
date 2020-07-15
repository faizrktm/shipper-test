import React from 'react';
import styled from 'styled-components';

import { Card as CardComponent, Text, ProfilePicture } from '../General';
import { selectColor } from '../../helper/theme';
import Person from '../../assets/person.jpeg';
import DonutChart from '../DonutChart';

const Card = () => (
  <CardComponent>
    <Header>
      <Text color="textMild" size="small">
        ID Driver{' '}
        <Text weight="bold" color="brand" size="small">
          KOB209
        </Text>
      </Text>
    </Header>
    <Content>
      <ProfilePicture src={Person} alt="person image" />
      <Wrapper>
        <Title color="textMild" size="small">
          Nama Driver
        </Title>
        <Text size="small">Jonathan Smith</Text>
      </Wrapper>
      <Wrapper>
        <Title color="textMild" size="small">
          Telepon
        </Title>
        <Text size="small">0822 8281 7733</Text>
      </Wrapper>
      <Wrapper>
        <Title color="textMild" size="small">
          Jadwal
        </Title>
        <Text size="small">
          Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu
        </Text>
      </Wrapper>
      <ChartWrapper>
        <DonutChart percentage={65} title="Ontime" />
      </ChartWrapper>
    </Content>
  </CardComponent>
);

export default Card;

const Header = styled.div`
  padding: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom: 1px solid ${selectColor('border')};
`;

const Content = styled.div`
  padding: 1rem;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Title = styled(Text)`
  margin-bottom: 0.5rem;
`;

const ChartWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
