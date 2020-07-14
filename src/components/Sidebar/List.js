import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { selectColor } from '../../helper/theme';

const List = ({ to, title, active }) => (
  <Container>
    <Link to={to} isActive={() => active}>
      <Icon />
      <span>{title}</span>
    </Link>
  </Container>
);

export default memo(List);

const Container = styled.li`
  margin: 0;
`;

const Link = styled(NavLink)`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${selectColor('text')};
  display: flex;
  align-items: center;
  border-left: 0.25rem solid transparent;
  padding: 1rem 0 1rem 1rem;

  ${({ isActive }) =>
    isActive() &&
    `
    font-weight: bold;
    background-color: ${selectColor('background')} !important;
    border-color: ${selectColor('brand')} !important;
    color: ${selectColor('brand')} !important;

    > div {
      border-color: ${selectColor('brand')} !important;
    }
  `}

  &:hover {
    font-weight: bold;
    background-color: ${selectColor('background')};
    border-color: ${selectColor('brand')};
    color: ${selectColor('brand')};

    > div {
      border-color: ${selectColor('brand')};
    }
  }
`;

const Icon = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid ${selectColor('text')};
  margin-right: 0.5rem;
`;
