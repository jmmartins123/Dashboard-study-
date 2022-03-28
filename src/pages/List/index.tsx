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
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() +1));
  
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const [data, setData] = useState<IData[]>([]);

  const { type } = useParams();  
  
  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  },[type]);

  useEffect(() => { 

    const filteredDate = listData.filter( item => {
      const date = new Date(item.date);
      const month =String(date.getMonth() +1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const dataFormatted = filteredDate.map(item => {      
      return {
        id: String(new Date().getTime()) + item.amount,
        description: item.description,
        amount: Number(item.amount),
        frequency: item.frequency,
        date: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
      }
    });

    setData(dataFormatted);      
      
  },[listData, monthSelected, yearSelected, data.length]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#f7931b' : '#e44c4e'
  },[type]);

  const title =  useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saída'
  }, [type]);

  const months = [
    {value: 1, label: 'Janeiro'},
    {value: 2, label: 'Fevereiro'},
    {value: 3, label: 'Março'},
    {value: 4, label: 'Abril'},
    {value: 5, label: 'Maio'},  
    {value: 6, label: 'Junho'},  
    {value: 7, label: 'Julho'},
  ]

  const years = [
    {value: 2018, label: 2018},
    {value: 2019, label: 2019},   
    {value: 2020, label: 2020},
    {value: 2021, label: 2021},
    {value: 2022, label: 2022},
  ]

  return (
    <>        
      <Container>
        <ContentHeader title={title} lineColor={lineColor}>
            <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected}/>                         
            <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />                        
            {/* Estou guardando meu valor sempre quando minha propriedade ser alterada */}
            
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
            data.map(item => (
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
function iresponsefilter(iresponsefilter: any) {
  throw new Error("Function not implemented.");
}

