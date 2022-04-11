import React, { ChangeEvent, useState } from "react";
import { TextValidator } from 'react-material-ui-form-validator';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from "@mui/material";

interface IPasswordInput{    
    name: string
    value: string
    validators?: any
    errorMessages?: any
    label:string
    onChange(e: ChangeEvent<HTMLInputElement>): void;  
    onClick: void
}

const PasswordInput: React.FC<IPasswordInput> = ({  
  name,
  value,
  validators,
  errorMessages,
  label,
  onChange,
  onClick,
}) => {
    const [hiddenSenha, setHiddenSenha] = useState();

    return(
        <>
                    
            <InputAdornment position="end" className="passwordInput">
                <IconButton>
                    {hiddenSenha ? (
                    <VisibilityOffIcon />
                    ) : (
                    <VisibilityIcon />
                    )}
                </IconButton>                
                
            </InputAdornment>
            <TextValidator
                name={name}
                label={label}
                variant="outlined"
                onChange={onChange}
                fullWidth
                value={value}
                validators={validators}
                errorMessages={errorMessages}
                type={hiddenSenha ? "password" : "text"}
            />                    
        </>
    )
};

export default PasswordInput;