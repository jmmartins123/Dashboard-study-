import React, {useRef, useState, ChangeEvent}from "react";
import LogoImg from '../../assets/logo.svg';

// import { VisibilityOff,Visibility, Password } from "@mui/icons-material";
// import { ValidationTypes } from "../../components/Config/ValidationTypes";
// import { MessageValidation } from "../../components/Config/MensagerValidation";
// import { TextValidator } from 'react-material-ui-form-validator';
// import InputAdornment from '@mui/material/InputAdornment';
// import { IconButton } from "@mui/material";

import { useAuth } from "../../components/hooks/auth";
import { ButtonComponent } from "../../components/ButtonComponent";

import { 
  Container, 
  Header, 
  Logo, 
  Title,
  Form,
  FormTitle,  
} from "./styles";
import { Input } from "../../components/InputComponent";


const Signin: React.FC = () => {
  const { signIn } = useAuth(); 
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>  
      <Header>
        <Logo src={LogoImg} alt="logo-minha-carteira" />  
        <Title>Minha Carteira</Title>
      </Header>

      <Form 
        onSubmit={() => signIn(email, password)}
      >
        <FormTitle>Entrar</FormTitle>

        <Input  
          type="email"
          placeholder="e-mail"          
          onChange={(e) => setEmail(e.target.value)} 
          required              
        />              

        <Input 
          type="password"
          placeholder="senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />                 

        <ButtonComponent 
          type="submit"          
        >
          Acessar
        </ButtonComponent>
      </Form>
    </Container>
  );
}

export { Signin };