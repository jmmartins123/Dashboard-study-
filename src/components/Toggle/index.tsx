import React from "react";
// import Switch from 'react-switch';
import Switch from '@mui/material/Switch';

import { 
    Container, 
    ToggleLabel 
} from "./styles";

const Toggle: React.FC = () => {
          
    return(
        <>
            <Container>
                <ToggleLabel>Light</ToggleLabel>                
                <Switch                       
                    onChange={() => console.log('funcionou')}                    
                />
                <ToggleLabel>Dark</ToggleLabel>
            </Container>
        </>
    );
}    


export {Toggle}