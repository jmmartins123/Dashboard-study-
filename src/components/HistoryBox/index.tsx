import React from "react";
import {         
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import formatCurrency from "../../utils/formatCurrency";

import {         
    Container, 
    Title,
    ChartContainer,
    Header,
    LegendContainer,
    LegendItem,
    Card,
    Span
} from "./styles";

interface IHostoryBoxProps{
    data: 
    {
        month: string;       
        amountEntry: number;
        amountOutput: number;        
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutout: string;    
}

const HistoryBox: React.FC<IHostoryBoxProps> = ({
    data,
    lineColorAmountEntry,
    lineColorAmountOutout
}) => (
    <Container>
        <Header>
            <Title>
                Histórico de saldo!
            </Title>

            <LegendContainer>
                <LegendItem>
                    <Card
                        color={lineColorAmountEntry}
                    />                                            
                    <Span>Entradas</Span>
                </LegendItem>

                <LegendItem>
                    <Card
                        color={lineColorAmountOutout}
                    />                                            
                    <Span>Saídas</Span>
                </LegendItem>
            </LegendContainer>
        </Header>

        <ChartContainer>
            <ResponsiveContainer>
                <LineChart 
                    data={data}
                    margin={{top: 5, right: 20, left: 20, bottom: 5}}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                    <XAxis 
                        dataKey="month" 
                        stroke="#cecece" 
                    />
                    <Tooltip
                        formatter={(value: number) => formatCurrency(Number(value))}
                    />
                    <Line 
                        dataKey="amountEntry"
                        type="monotone"
                        name="Entradas"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{r: 5}} //raio da bolinha
                        activeDot={{r: 8}} //raio da bolinha ativa
                    />
                
                    <Line 
                        dataKey="amountOutput"
                        type="monotone"
                        name="Saídas"
                        stroke={lineColorAmountOutout}
                        strokeWidth={5}
                        dot={{r: 5}} //raio da bolinha
                        activeDot={{r: 8}} //raio da bolinha ativa
                    />                
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
)   

export { HistoryBox }