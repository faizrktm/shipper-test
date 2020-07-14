import React from 'react';
import styled from 'styled-components';

import List from './List';
import { useLocation } from 'react-router-dom';

const menus = {
  '/': 'Beranda',
  '/pickups': 'Pickup',
  '/orders': 'Order',
  '/drivers': 'Driver',
  '/merchants': 'Merchant',
  '/reports': 'Laporan',
  '/profile': 'Profil',
};

const Menu = () => {
  const location = useLocation();
  return (
    <Container>
      <ListContainer>
        {Object.keys(menus).map((item) => (
          <List key={item} to={item} title={menus[item]} active={item === location.pathname} />
        ))}
      </ListContainer>
    </Container>
  );
}


export default Menu;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 0.5rem;
`;

const ListContainer = styled.ul`
  margin-bottom: 2rem;
  clear: both;
  margin-left: 0;
  list-style: none;
`;
