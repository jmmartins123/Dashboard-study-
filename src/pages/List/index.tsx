import React, { 
  useMemo, 
  useState, 
  useEffect
} from "react";
import { useParams } from 'react-router-dom';

import { 
  Container,
  Content,
  Filters,  
} from "./styles";

import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";

import listOfMonths from '../../utils/months';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

interface IData {
  id: string;
  description: string;
  amount: number;
  frequency: string;
  date: string;
  tagColor: string;
}

export const List: React.FC = () => {

  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() +1);  
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
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

  const pageData = useMemo(() => {  
    return type === 'entry-balance' ? 
    {
      title: 'Entradas',
      tagColor: '#4e41f0',
      data: gains
    } : {
      title: 'Saída',
      tagColor: '#e44c4e',
      data: expenses
    }
  }, [])

  const months = useMemo(() => {      
    return listOfMonths.map((month, index) => {
      return{
        value: index +1,
        label: month
      }
    })
  },[])

  const year = useMemo(() => {
    const { data } = pageData;

    let uniqueYears: number[] = []

    data.forEach(item => {
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

  }, [data]);

  useEffect(() => { 
    const { data } = pageData;

    const filteredDate = data.filter( item => {
      const date = new Date(item.date);
      const month = date.getMonth() +1;
      const year = date.getFullYear();

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
      
  },[data, monthSelected, yearSelected, data.length, selectdFrequency]);


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
    <>        
      <Container>
        <ContentHeader 
          title={pageData.title} 
          lineColor={pageData.tagColor}
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
