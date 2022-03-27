import React, { useMemo, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import { 
  Container,
  Content,
  Filters,  


} from "./styles";

interface IData {
  id: string;
  description: string;
  amount: number;
  frequency: string;
  date: string;
  tagColor: string;
}

export const List: React.FC = () => {
  const [date, setDate] = useState<IData[]>([]);

  const { type } = useParams();  

  useEffect(() => { 
      const response = listDate.map( item => {
        return {
          id: String(Math.random () * date.length),
          description: item.description,
          amount: Number(item.amount),
          frequency: item.frequency,
          date: item.date,
          tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
        }
      })

      setDate(response);      
      
  }, []);

  const listDate = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  },[type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#f7931b' : '#e44c4e'
  },[type]);

  const title =  useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saída'
  }, [type]);

  const months = [
    {value: 7, label: 'Julho'},      
    {value: 8, label: 'Agosto'},   
    {value: 9, label: 'Setembro'}  
  ]

  const years = [
    {value: 2020, label: 2020},
    {value: 2019, label: 2019},   
    {value: 2018, label: 2018}     
  ]

  return (
    <>        
      <Container>
        <ContentHeader title={title} lineColor={lineColor}>
            <SelectInput options={months} />
            <SelectInput options={years} />            
          </ContentHeader>       
          <Filters>
          <button 
              type="button"
              className="tag-filter tag-filter-recurrent"
          >
            Recorrentes
          </button>            

          <button 
              type="button"
              className="tag-filter tag-filter-eventual"
          >
            Eventuais
          </button>            
        </Filters>

        <Content>
          {
            date.map(item => (
              <HistoryFinanceCard  
                key={item.id}                       
                tagColor={item.tagColor}
                title={item.description}
                subtitle={item.date}
                amount= {item.amount}
              />
            ))                     
          }
        </Content>
      </Container>
    </>
  );
}
