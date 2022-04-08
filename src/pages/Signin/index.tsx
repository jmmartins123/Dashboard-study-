import React, {useRef, useState, ChangeEvent}from "react";
import LogoImg from '../../assets/logo.svg';

import { ValidatorForm } from "react-material-ui-form-validator";
import { TextInput } from "../../components/InputComponent";
import { VisibilityOff,Visibility } from "@mui/icons-material";
import { ButtonComponent } from "../../components/ButtonComponent";
import { ValidationTypes } from "../../components/Config/ValidationTypes";
import { MessageValidation } from "../../components/Config/MensagerValidation";
import { TextValidator } from 'react-material-ui-form-validator';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { 
  Container, 
  Header, 
  Logo, 
  Title,
  Form,
  FormTitle,  
} from "./styles";

interface IDados{
  i_Senha: string; 
  i_Email: string;
}

const Signin: React.FC = () => {
  const formSb = useRef(null);
  const [dados, setDados] = useState<IDados>({
    i_Senha: '',   
    i_Email: '',
  });
  const [hiddenSenha, setHiddenSenha] = useState(true);

  const handleChange = ((e: ChangeEvent<HTMLInputElement>) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  })

  return (
    <Container>  
      <Header>
        <Logo src={LogoImg} alt="logo-minha-carteira" />  
        <Title>Minha Carteira</Title>
      </Header>

      <Form 
        onSubmit={() => {}}
      >
        <FormTitle>Entrar</FormTitle>

        <ValidatorForm
          ref={formSb}
          onError={errors => console.log(errors)}
          onSubmit={() => {}}
        >

          <TextInput                                                           
              name="i_Email"
              label="E-mail"
              value={dados.i_Email}
              validators={[ValidationTypes.Required]}
              errorMessages={[MessageValidation.Required]}           
              type="text"
              onChange={handleChange}
          />

            <TextValidator
              name="i_Senha"
              label="Senha"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={dados.i_Senha}
              validators={[
                ValidationTypes.Required,
                ValidationTypes.ValidateLenght,
                ValidationTypes.ValidateNumber,
                ValidationTypes.ValidateCase
              ]}                      
              errorMessages={[
                MessageValidation.Required,
                MessageValidation.PasswordLenghtInvalid,
                MessageValidation.PasswordNumberInvalid,
                MessageValidation.PasswordCaseInvalid
              ]}
              type={hiddenSenha ? "password" : "text"}   
              InputProps={{
                endAdornment: (                          
                  <InputAdornment position="end">
                  <IconButton                    
                    onClick={() => setHiddenSenha(!hiddenSenha)}                            
                  >
                    {hiddenSenha ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>                 
                                                                                                      
                ),
              }}
            />  
        </ValidatorForm>

        <ButtonComponent 
          type="submit"
        >
          Acessar
        </ButtonComponent>
      </Form>
    </Container>
  );
}

export { Signin }