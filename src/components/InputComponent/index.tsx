import React, { ChangeEvent, useState } from 'react';
import { 
    TextValidator,         
} from 'react-material-ui-form-validator';
import { Container } from './styles';

interface TextInputProps {
  mask?: string;
  type: string;
  name: string;
  value: string;
  validators?: any;
  errorMessages?: any;
  label: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;  
  id?: string;
}

export const TextInput = ({  
  type,
  name,
  value,
  validators,
  errorMessages,
  label,
  onChange,  
  id,
}: TextInputProps) => (  
    <Container>      
        <TextValidator
        name={name}
        label={label}
        id={id}
        variant="outlined"
        onChange={onChange}        
        fullWidth
        value={value}
        validators={validators}
        errorMessages={errorMessages}
        type={type}
        />        
    </Container>
);