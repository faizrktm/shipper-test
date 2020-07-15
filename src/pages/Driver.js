import React from 'react';

import Page from '../components/Page';
import Header from '../components/Driver/Header';
import List from '../components/Driver/List';
import { ReduxerProvider } from '../modules/Reduxer';
import { reducer, initialState } from '../modules/driver';

const Driver = () => (
  <ReduxerProvider reducer={reducer} initialState={initialState}>
    <Page>
      <Header />
      <List />
    </Page>
  </ReduxerProvider>
);

export default Driver;
