import React from "react";
import { GridLayout } from "./style";

import { MainHeader } from "../MainHeader";
import { Content } from "../Content";
import { Aside } from "../Aside";

export const Layout: React.FC = ({children}) => {
    return (
        <GridLayout>   
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </GridLayout>
    );
}