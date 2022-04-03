import React, { useMemo, useState } from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../utils/months';
import { 
  CardResume,
  
} from "../../components/CardResume";
import { 
  Container, Content
} from "./styles";

export const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() +1);  
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear()); 

  const months = useMemo(() => {      
    return listOfMonths.map((month, index) => {
      return{
        value: index +1,
        label: month
      }
    })
  },[])

  const year = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
          uniqueYears.push(year)
        }        
      });
      
      return uniqueYears.map(year => {
        return {
          value: year,
          label: year
        }
      })
  },[]);

  const handleMonthSelected = (month: string) => {
    try{
      const paserMonth = Number(month);
      setMonthSelected(paserMonth)
    } 
    catch(error){
      throw new Error('invalid month value. Is accept 0 - 24.')
    }
  }

  const handleYearSelected = (year: string) => {
    try{
      const paserYear= Number(year);
      setYearSelected(paserYear)
    } 
    catch(error){
      throw new Error('invalid month value. Is accept interger numbers.')
    }
  }
    return (
      <Container>                
          <ContentHeader 
            title={"Dashboard"} 
            lineColor="#f7931b"
          >

          <SelectInput 
            options={months} 
            onChange={(e) => handleMonthSelected(e.target.value)} 
            defaultValue={monthSelected}
          />   

          <SelectInput 
            options={year} 
            onChange={(e) => handleYearSelected(e.target.value)} 
            defaultValue={yearSelected} 
          />                 
          </ContentHeader> 

          <Content>
            <CardResume 
              title="Saldo"
              amount={150.00} 
              footerlabel="atualizado com base nas entradas e saídas"
              image="dolar"
              color="#4e41f0"
            />

            <CardResume 
              title="Entradas"
              amount={5000.00} 
              footerlabel="atualizado com base nas entradas e saídas"
              image="arrowUp"
              color="#f7931b"           
            />

            <CardResume 
              title="Saldo"
              amount={4850.00} 
              footerlabel="atualizado com base nas entradas e saídas"
              image="arrowDown"
              color="#e44c4e"
            />
          </Content>                         
      </Container>
    );
}
