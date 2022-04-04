import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer
// } from 'recharts';
import { 
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRigth,
  Title,
  NumberTitle,
  Description
} from "./styles";

interface IPieProps{
  data: {
    name: string,
    value: number,
    percent: number,
    color: string
  }[];
}

const PieChart:React.FC<IPieProps> = ({ data }) => (

  <Container>
  
    <SideLeft>
      <Title>
        Relação
      </Title>

      <LegendContainer>      
      {
        data.map(indicator => (
        <Legend key={indicator.name}>
          <NumberTitle color={indicator.color}>
            {indicator.percent}
          </NumberTitle>
          <Description>{indicator.name}</Description>
        </Legend> 
        ))
      }                        
      </LegendContainer>
    </SideLeft>

    <SideRigth>     
    </SideRigth>

  </Container>

);

export { PieChart }