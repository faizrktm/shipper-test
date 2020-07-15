import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { More, StatusWarning } from 'grommet-icons';

import { Card as CardComponent, Text, ProfilePicture } from '../General';
import { selectColor } from '../../helper/theme';
import Person from '../../assets/person.jpeg';
import DonutChart from '../DonutChart';

const Info = ({ label, text }) => (
  <Wrapper>
    <Title color="textMild" size="small">
      {label}
    </Title>
    <Text size="small">{text}</Text>
  </Wrapper>
);

const Card = ({ id, name, phone, schedule, percentage, picture }) => {
  const critical = percentage < 50;
  return (
    <CardComponent>
      <Header critical={critical}>
        <Text color={critical ? 'white' : 'textMild'} size="small">
          ID Driver{' '}
          <Text weight="bold" color={critical ? 'white' : 'brand'} size="small">
            {id}
          </Text>
        </Text>
        <ActionWrapper>
          {critical && <StatusWarning color="white" size="1.25rem" />}
          <More size="1.25rem" color={critical ? 'white' : '#404852'} />
        </ActionWrapper>
      </Header>
      <Content>
        <ProfilePicture src={picture} alt="person image" />
        <Info label="Nama Driver" text={name} />
        <Info label="Telepon" text={phone} />
        <Info label="Jadwal" text={schedule} />
        <ChartWrapper>
          <DonutChart percentage={percentage} title="Ontime" />
        </ChartWrapper>
      </Content>
    </CardComponent>
  );
};

Card.defaultProps = {
  picture: Person,
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  picture: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Card;

const Header = styled.div`
  padding: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom: 1px solid ${selectColor('border')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ critical }) =>
    critical ? selectColor('brand') : 'white'};
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

const ActionWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 0.5rem;
`;
