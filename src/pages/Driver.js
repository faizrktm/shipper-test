import React, { useCallback } from 'react';
import { useQuery } from '@apollo/client';

import Page from '../components/Page';
import Header from '../components/Driver/Header';
import List from '../components/Driver/List';
import { Text } from '../components/General';
import { GET_DRIVERS } from '../modules/query';

const Driver = () => {
  const { loading, error, data, refetch } = useQuery(GET_DRIVERS);

  // refetch should be available even on initial load
  const searchDrivers = useCallback((name) => {
    refetch({ q: name });
  }, []);

  return (
    <Page>
      <Header onSearch={searchDrivers} />
      {loading && <Text>Loading</Text>}
      {error && <Text>Something went wrong</Text>}
      {data && <List drivers={data.drivers} />}
    </Page>
  );
};

export default Driver;
