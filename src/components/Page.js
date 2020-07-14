import React from 'react';
import styled from 'styled-components';

import { selectColor } from '../helper/theme';
import theme from '../config/theme';
import Header from './Header';
import Sidebar from './Sidebar';
import { UIProvider } from './UIState';

const Page = ({ children }) => (
  <UIProvider>
    <Header />
    <Main>
      <Sidebar />
      <Wrapper>
        {children}
      </Wrapper>
    </Main>
  </UIProvider>
);

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
`;
