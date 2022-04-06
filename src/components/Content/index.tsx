import React from "react";
import { Container } from "./style";

export const Content: React.FC = ({children}) => (
    <Container>                    
        {children}
    </Container>
);