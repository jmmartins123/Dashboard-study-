import React, { useMemo, useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import listOfMonths from '../../utils/months';
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
  const [selectdFrequency,setSelectdFrequency] = useState(['recorrente', 'eventual']);

  const { type } = useParams();  
  
  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectdFrequency.findIndex(item => item === frequency);

    if(alreadySelected >= 0){
      const filtered = selectdFrequency.filter(item => item !== frequency)
      setSelectdFrequency(filtered);

    } else{      
      setSelectdFrequency((prev) => [...prev, frequency]);
    }
  }


  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  },[type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#f7931b' : '#e44c4e'
  },[type]);

  const title =  useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saída'
  }, [type]);  

  const months = useMemo(() => {      
    return listOfMonths.map((month, index) => {
      return{
        value: index +1,
        label: month
      }
    })
  },[])


  const year = useMemo(() => {
    let uniqueYears: number[] = []

    listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    });

    return uniqueYears.map(year => {
      return{
        value: year,
        label: year
      }
    })

  }, [listData]);

  useEffect(() => { 

    const filteredDate = listData.filter( item => {
      const date = new Date(item.date);
      const month =String(date.getMonth() +1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected && selectdFrequency.includes(item.frequency);
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
      
  },[listData, monthSelected, yearSelected, data.length, selectdFrequency]);

  return (
    <>        
      <Container>
        <ContentHeader 
          title={title} 
          lineColor={lineColor}
        >
            <SelectInput 
              options={months} 
              onChange={(e) => setMonthSelected(e.target.value)} 
              defaultValue={monthSelected}
            />                         
            <SelectInput 
              options={year} 
              onChange={(e) => setYearSelected(e.target.value)} 
              defaultValue={yearSelected} 
            />                        
            {/* Estou guardando meu valor sempre quando minha propriedade ser alterada */}
            
          </ContentHeader>       
          <Filters>
          <button 
            type="button"
            className= {`tag-filter tag-filter-recurrent
            ${selectdFrequency.includes('recorrente') && 'tag-actived'}`}            
            onClick={() => handleFrequencyClick('recorrente')}
          >
            Recorrentes
          </button>            

          <button 
            type="button"
            className={`tag-filter tag-filter-eventual
            ${selectdFrequency.includes('eventual') && 'tag-actived'}`}
            onClick={() => handleFrequencyClick('eventual')}
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
