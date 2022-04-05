import React from "react";
import { 
    Container,
    SideLeft, 
    SideRight, 
    Title,
    LegendContainer,
    Legend,        
    NumberTitle,
    Description
} from "./styles";

import {         
    ResponsiveContainer,
    BarChart,
    Bar,   
    Tooltip,
    Cell
} from "recharts";

interface IBarChartProps {
    title: string;
    data: {
        name: string,
        amount: number,
        percent: number,
        color: string;
    }[];    
}

const BarChartBox: React.FC<IBarChartProps> = ({ data, title }) => {
    return(
        <Container>
            <SideLeft>
                <Title>{title}</Title>
        
                <LegendContainer>      
                    {
                        data.map((indicator) => (
                            <Legend key={indicator.name}>

                                <NumberTitle color={indicator.color}>
                                {indicator.percent}%
                                </NumberTitle>

                                <Description>{indicator.name}</Description>
                            </Legend> 
                        ))
                    }                        
                </LegendContainer>

            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <BarChart
                     data={data}
                    >
                        <Bar
                         dataKey="amount"                            
                        >
                            {
                                data.map((indicator) => (
                                    <Cell 
                                        key={indicator.name}
                                        cursor= "pointer"
                                        fill= {indicator.color}                                                                            
                                    />
                                ))
                            }

                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
            
        </Container>
    );
}

export { BarChartBox }