import React from "react";
// import Switch from 'react-switch';
import Switch from '@mui/material/Switch';

import { 
    Container, 
    ToggleLabel 
} from "./styles";

interface IToggleProps{
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
    labelLeft,
    labelRight,
    checked,
    onChange
}) => {
          
    return(
        <>
            <Container>
                <ToggleLabel>{labelLeft}</ToggleLabel>                
                <Switch                       
                   checked={checked}                   
                   onChange={onChange}                   
                />
                <ToggleLabel>{labelRight}</ToggleLabel>
            </Container>
        </>
    );
}    


export {Toggle}