import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectColor } from '../helper/theme';
import theme from '../config/theme';
import Header from './Header';
import Sidebar from './Sidebar';
import { UIProvider } from './UIState';
import breakpoint from 'styled-components-breakpoint';

const Page = ({ children }) => (
  <UIProvider>
    <Header />
    <Main>
      <Sidebar />
      <Wrapper>{children}</Wrapper>
    </Main>
  </UIProvider>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - ${theme.header.height});
  background-color: ${selectColor('background')};
`;

const Wrapper = styled.div`
  padding: 1rem;
  flex: 1;
  align-self: stretch;

  ${breakpoint('desktop')`
    padding: 2rem 1.5rem 2rem 1.5rem;
  `}
`;
