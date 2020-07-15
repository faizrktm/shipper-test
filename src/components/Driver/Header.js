import React, { memo, useState } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Add, FormSearch } from 'grommet-icons';

import { Button, FloatingButton, Text, TextInput } from '../General';
import useDebounce from '../../helper/useDebounce';
import useNoInitialMount from '../../helper/useNoInitialMount';
import useDispatch from '../../modules/useDispatch';
import { searchDriver } from '../../modules/driver';

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const debounceStream = useDebounce(searchValue, 700);

  useNoInitialMount(() => {
    dispatch(searchDriver(debounceStream));
  }, [debounceStream]);

  return (
    <Container>
      <Title>
        <Text size="large" color="brand" weight="bold">
          DRIVER MANAGEMENT
        </Text>
        <SubText size="small">Daftar Driver yang bekerja dengan Anda</SubText>
      </Title>
      <StyledFloatingButton icon={<Add color="white" />} />
      <ActionWrapper>
        <StyledTextInput
          icon={<FormSearch color="#ff4646" size="1.5rem" />}
          placeholder="Cari Driver"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <StyledButton
          icon={<Add color="white" size="1rem" />}
          label="TAMBAH DRIVER"
        />
      </ActionWrapper>
    </Container>
  )
};

export default memo(Header);

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${breakpoint('desktop')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;

  ${breakpoint('desktop')`
    flex-direction: row;
    margin-bottom: 0;
  `}
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubText = styled(Text)`
  margin-top: 0.5rem;
`;

const StyledFloatingButton = styled(FloatingButton)`
  ${breakpoint('desktop')`
    display: none;
  `}
  z-index: 2;
`;

const StyledButton = styled(Button)`
  display: none;
  margin-left: 1rem;

  ${breakpoint('desktop')`
    display: flex;
  `}
`;

const StyledTextInput = styled(TextInput)`
  align-self: stretch;
`;
