import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';

import { Text } from './General';

/**
 *
 * @param {number} percentage
 * @param {string} title
 *
 * This component act as custom Label of Chart since the label from
 * chart library is not really customizeable.
 * We are not implement propTypes in here since it only used by DonutChart and takes same props as it
 * and we already implement propTypes on DonutChart
 */
const LabelChart = ({ percentage, title }) => (
  <LabelContainer>
    <Wrapper>
      <Text color="brand" weight="bold">
        {percentage}%
      </Text>
      <Text size="small">{title}</Text>
    </Wrapper>
  </LabelContainer>
);

const LabelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 *
 * @param {number} percentage
 * @param {string} title
 *
 * This component Draw a simple Donut Chart that takes only 1 data
 * (since it currently what it needs to do).
 * We avoid passing object as a props to maximize memo implementation.
 */
const DonutChart = ({ percentage, title }) => (
  <Container>
    <PieChart
      startAngle={90}
      totalValue={100}
      lineWidth={15}
      rounded
      background="#EFEFEF"
      animate
      data={[{ title: title, value: percentage, color: '#ff4646' }]}
    />
    <LabelChart percentage={percentage} title={title} />
  </Container>
);

export default memo(DonutChart);

DonutChart.propTypes = {
  percentage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
