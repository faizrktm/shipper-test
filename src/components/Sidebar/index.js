import React, { useContext } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Close } from 'grommet-icons';

import { UIContext } from '../UIState';
import Menu from './Menu';
import { Text } from '../General';
import { selectColor } from '../../helper/theme';

const Sidebar = () => {
  const {
    state: { sidebar },
    toggleSidebar,
  } = useContext(UIContext);
  return (
    <Container active={sidebar}>
      <CloseButton onClick={toggleSidebar}>
        <Close color="#fff" />
      </CloseButton>
      <Wrapper active={sidebar}>
        <Profile>
          <ProfilePicture />
          <Text color="border" weight="bold">
            Hello,{' '}
            <Text color="blue" weight="bold">
              {' '}
              John Smith
            </Text>
          </Text>
        </Profile>
        <Menu />
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ active }) =>
    active ? 'rgba(0,0,0,0.5)' : 'transparent'};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transition-property: visibility, background-color;
  transition-duration: 0s, 0.2s;
  transition-timing-function: linear, ease;
  transition-delay: 0.2s, 0s;

  ${breakpoint('desktop')`
    position: relative;
    background-color: white;
    visibility: visible;
    z-index: 1000;
    width: 14rem;
  `}
`;

const Wrapper = styled.div`
  padding-left: 4rem;
  background-color: white;
  width: 100%;
  height: 100%;
  transform: ${({ active }) =>
    active ? 'translateX(-4rem)' : 'translateX(-200%)'};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transition-property: visibility, transform;
  transition-duration: 0s, 0.2s;
  transition-timing-function: linear, ease;
  transition-delay: ${({ active }) => (active ? '0s' : '0.2s, 0s')};

  ${breakpoint('desktop')`
    transform: none;
    padding-left: 0;
    visibility: visible;
    background-color: white;
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;

  ${breakpoint('desktop')`
    display: none;
  `}
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ${breakpoint('desktop')`
    display: none;
  `}
`;

const ProfilePicture = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${selectColor('border')};
  margin-bottom: 1rem;
`;
