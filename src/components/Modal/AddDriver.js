import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { TextInput, Button, Text } from '../General';
import validation from '../../config/validation';
import { ADD_DRIVER, GET_DRIVERS } from '../../modules/query';

const { required, phone } = validation;

const AddDriver = ({ dismissModal }) => {
  const [mutate, { loading, error, called }] = useMutation(ADD_DRIVER);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    if (loading) return;
    try {
      await mutate({
        variables: { name: data.driver_name, phone_number: data.phone_number },
        update: (proxy, { data: { addDriver } }) => {
          const { driver } = addDriver;
          const data = proxy.readQuery({ query: GET_DRIVERS });
          proxy.writeQuery({
            query: GET_DRIVERS,
            data: {
              ...data,
              drivers: [...data.drivers, driver],
            },
          });
        },
      });
    } catch (_) {}
  };

  if (!called || error || loading) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} data-testid="driver-form">
        <FormGroup>
          <Label htmlFor="driver_name">Nama Driver</Label>
          <TextInput
            name="driver_name"
            id="driver_name"
            ref={register({ required })}
          />
          {errors.driver_name && (
            <ErrorWrapper>
              <Text size="small" color="brand">
                {required}
              </Text>
            </ErrorWrapper>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone_number">Nomor Telepon</Label>
          <TextInput
            name="phone_number"
            id="phone_number"
            ref={register({ required, pattern: /^\+\d{9,30}$/ })}
          />
          {errors.phone_number?.type === 'required' && (
            <ErrorWrapper>
              <Text size="small" color="brand">
                {required}
              </Text>
            </ErrorWrapper>
          )}
          {errors.phone_number?.type === 'pattern' && (
            <ErrorWrapper>
              <Text size="small" color="brand">
                {phone}
              </Text>
            </ErrorWrapper>
          )}
        </FormGroup>
        <ButtonWrapper>
          <Button color="brand" label="Submit" type="submit" fill />
        </ButtonWrapper>
        {error && (
          <Text data-testid="mutation-alert" size="small" color="brand">
            {error.message}
          </Text>
        )}
      </form>
    );
  }

  return (
    <Wrapper>
      <Text size="large" color="blue" weight="bold">
        Success Adding New Driver!
      </Text>
      <ButtonWrapper>
        <Button
          color="blue"
          label="Close"
          fill
          type="button"
          onClick={() => dismissModal()}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default AddDriver;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 2rem;
`;

const ErrorWrapper = styled.div`
  margin-top: 0.5rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-self: stretch;

  > button {
    border-radius: 0;
  }
`;
