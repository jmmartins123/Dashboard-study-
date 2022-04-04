import React, { useMemo, useState } from "react";

import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import { CardResume } from "../../components/CardResume"; 
import { MensagerBox } from "../../components/MensagerBox";
import { PieChartBox } from "../../components/PieChartBox";
import { HistoryBox } from "../../components/HistoryBox";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import ufaImg from '../../assets/grinning.svg'

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected){
        try{
          total += Number (item.amount);

        }catch{
          throw new Error('Invalid amount! Amount must be nunber.')
        }
      }
    });
    
    return total;

  },[monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if(month === monthSelected && year === yearSelected){
        try{
          total += Number (item.amount);

        }catch{
          throw new Error('Invalid amount! Amount must be nunber.')
        }
      }
    });
    
    return total;

  },[monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;    

  },[totalGains,totalExpenses]);

  const message = useMemo(() => {
    if(totalBalance < 0){
      return{
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footertext: "Verifique seus gastos e tente reduzí-los no próximo mês." ,
        icon: sadImg
      }      
    }

    else if(totalBalance === 0){
      return{
        title: "Ufaa!",
        description: "Neste mês, você gastou extamente o que ganhou.",
        footertext: "Tenha cuidado." ,
        icon: ufaImg
      }
    }

    else{
      return{
        title: "Muito bem!",
        description: "Sua carteira está positiva!" ,
        footertext: "Continue assim. Considere investir o seu saldo" ,
        icon: happyImg
      }
    }

  }, [totalBalance]);

  const relationExpensesvsGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = (totalGains / total) * 100; 
    const percentExpenses = (totalExpenses / total) * 100; 

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(percentGains.toFixed(1)),
        color: "#f7931b"
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        color: "#e44c4e"
      }

    ];

    return data;

  }, [totalGains,totalExpenses]);

  const historyData = useMemo(() => {

    return listOfMonths
    .map((_, month) => {
        
      let amountEntry = 0;

      gains.forEach(gain => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if(gainMonth === month && gainYear === yearSelected){
          try{
              amountEntry += Number(gain.amount);
          }catch{
              throw new Error('amountEntry is invalid. amountEntry must be valid number.')
          }
        }
      });   

      let amountOutput = 0;

      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if(expenseMonth === month && expenseYear === yearSelected){
          try{
              amountOutput += Number(expense.amount);
          }catch{
              throw new Error('amountOutput is invalid. amountOutput must be valid number.')
          }
        }
      });


      return {
        monthNumber: month,
        month: listOfMonths[month].substr(0, 3),
        amountEntry,
        amountOutput
      }
    })    
  },[yearSelected]);

  const handleMonthSelected = (month: string) => {
    try{
      const paserMonth = Number(month);
      setMonthSelected(paserMonth)
    } 
    catch{
      throw new Error('invalid month value. Is accept 0 - 24.')
    }
  }

  const handleYearSelected = (year: string) => {
    try{
      const paserYear= Number(year);
      setYearSelected(paserYear)
    } 
    catch{
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
              amount={totalBalance} 
              footerlabel="atualizado com base nas entradas e saídas"
              icon="dolar"
              color="#4e41f0"
            />

            <CardResume 
              title="Entradas"
              amount={totalGains} 
              footerlabel="atualizado com base nas entradas e saídas"
              icon="arrowUp"
              color="#f7931b"           
            />

            <CardResume 
              title="Saídas"
              amount={totalExpenses} 
              footerlabel="atualizado com base nas entradas e saídas"
              icon="arrowDown"
              color="#e44c4e"
            />

            <MensagerBox 
              title={message.title}
              description={message.description}
              
              footertext={message.footertext}
              icon={message.icon} 
            />          

            <PieChartBox 
              data={relationExpensesvsGains} 
            /> 

            <HistoryBox 
              data={historyData} 
              lineColorAmountEntry="#F7931B"
              lineColorAmountOutout="#E44C4E"
            />
                
          </Content>      
 
      </Container>
    );
}
