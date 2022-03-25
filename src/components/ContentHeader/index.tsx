//** a tipagem "React.ReactNode" significa que um componente será tipado com outros componentes */

import React from "react";
import { SelectInput } from "../SelectInput";
import { 
    Container,
    TitleContainer,
    Controllers
} from "./styles";

interface IContentHeaderProps{
    title: string;
    lineColor: string;    
    children: React.ReactNode;
}

export const ContentHeader: React.FC<IContentHeaderProps> = ({
    title,
    lineColor, 
    children    
}) => {

    return(
        <Container>
            <TitleContainer liColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>  
    );
}