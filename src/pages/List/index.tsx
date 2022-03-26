import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";
import { 
  Container,
  Content,
  Filters,
  
} from "./styles";

export const List: React.FC = () => {
  const { type } = useParams();

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
        <ContentHeader title={title} lineColor={"#e44c4e"}>
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
        <HistoryFinanceCard                         
          tagColor='#e44c4e' 
          title='Conta de Luz'
          subtitle='27/07/2020'
          amount='R$ 130,00'                   
        />
        </Content>
      </Container>
    </>
  );
}