import React from "react";
import {         
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

import {         
    Container, 
    Title 
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
        <Title>
            Histórico de saldo!
        </Title>

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
                <Tooltip />
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
    </Container>
)   

export { HistoryBox }