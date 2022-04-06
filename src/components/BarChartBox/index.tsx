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
import formatCurrency from "../../utils/formatCurrency";

interface IBarChartProps {
    title: string;
    data: {
        name: string,
        amount: number,
        percent: number,
        color: string;
    }[];    
}

const BarChartBox: React.FC<IBarChartProps> = ({ data, title }) => (
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
                        name="Valor total"                            
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
                    <Tooltip
                        cursor={{ fill: 'none' }}
                        formatter={(value: number) => formatCurrency(Number(value))}
                    />
                </BarChart>
            </ResponsiveContainer>
        </SideRight>
        
    </Container>
);

export { BarChartBox }