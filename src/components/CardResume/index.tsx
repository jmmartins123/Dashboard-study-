import React, { useMemo } from "react";
import dolarimg from '../../assets/dolar.svg';import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import Countup from 'react-countup';
import { 
    Container,
    Title,
    Money,
    Small,
    Image
} from "./styles";

interface ICardResume{
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const CardResume: React.FC<ICardResume> = ({
    title,
    amount,
    footerlabel,
    icon,
    color
}) => {

    const iconSelected = useMemo (() => {
        switch (icon) {
            case 'dolar': 
                return dolarimg;

            case 'arrowUp': 
                return arrowUpImg;

            case 'arrowDown': 
                return arrowDownImg;

            default: 
                 return undefined;
        }               
    }, [icon])
    
    return(
        <Container 
            color={color}
        >
            <Title>{title}</Title>
            <Money>
                <Countup 
                   end={amount}  //quando parar
                   prefix={"R$ "} //o que vem antes do valor
                   separator="." //o que usar para separar os números
                   decimal="," //o que usar para separar casas decimais
                   decimals={2} //quantas casas decimais podem aparecer             
                />                
            </Money>
            <Small>{footerlabel}</Small>
            <Image src={iconSelected} alt={title}/>
        </Container>
    );
}

export { CardResume }