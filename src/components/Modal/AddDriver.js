import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

import { TextInput, Button } from '../General';
import validation from '../../config/validation';

const { required } = validation;

const AddDriver = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="driver_name">Nama Driver</Label>
        <TextInput name="driver_name" id="driver_name" ref={register({ required })} />
        {errors.driver_name && <span>{required}</span>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="phone_number">Nomor Telepon</Label>
        <TextInput name="phone_number" id="phone_number" ref={register({ required })} />
        {errors.phone_number && <span>Phone Number is Required</span>}
      </FormGroup>
      <Button color="brand" label="Submit" type="submit" />
    </form>
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
