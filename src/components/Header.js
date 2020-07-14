import React, { useContext } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Menu, Phone, Notification } from 'grommet-icons';

import { ProfilePicture, Text } from './General';
import ShipperLogo from '../assets/logo.png';
import ShipperLogoSmall from '../assets/logo-small.png';
import theme from '../config/theme';
import { UIContext } from './UIState';
import { selectColor } from '../helper/theme';
import Person from '../assets/person.jpeg';

const Header = () => {
  const { toggleSidebar } = useContext(UIContext);
  return (
    <Container>
      <Wrapper>
        <MenuButton onClick={toggleSidebar}>
          <Menu />
        </MenuButton>
        <LogoBtn href="/">
          <Logo className="large" src={ShipperLogo} />
          <Logo className="small" src={ShipperLogoSmall} />
        </LogoBtn>
      </Wrapper>
      <Wrapper>
        <Action href="#">
          <Phone color="#000" size="1rem" />
        </Action>
        <Action href="#" active>
          <Notification color="#000" size="1rem" />
        </Action>
        <Profile>
          <Text color="border" weight="bold" size="small">
            Hello,{' '}
            <Text color="blue" weight="bold" size="small">
              {' '}
              John Smith
            </Text>
          </Text>
          <ProfilePicture src={Person} size="small" />
        </Profile>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: ${theme.header.height};
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
  padding: 0 1rem;
`;

const Logo = styled.img`
  height: 1.5rem;
  width: auto;
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;

  ${breakpoint('desktop')`
    display: none;
  `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoBtn = styled.a`
  height: 1.5rem;
  width: auto;
  .large {
    display: none;
  }

  ${breakpoint('desktop')`
    .large{
      display: flex;
    }
    .small{
      display: none;
    }
  `}
`;

const Action = styled.a`
  position: relative;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ active }) =>
    active &&
    `
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${selectColor('brand')};
    }
  `};
`;

const Profile = styled.div`
  padding-left: 2rem;
  display: none;

  ${breakpoint('desktop')`
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    grid-column-gap: 1rem;
  `}
`;
