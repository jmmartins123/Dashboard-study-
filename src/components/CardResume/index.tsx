import React from "react";
import dolarimg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import { 
    Container,
    Title,
    Amount,
    Small,
    Image
} from "./styles";

interface ICardResume{
    title: string;
    amount: number;
    footerlabel: string;
    image: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const CardResume: React.FC<ICardResume> = ({
    title,
    amount,
    footerlabel,
    image,
    color
}) => {
    return(
        <Container 
            color={color}
        >
            <Title>{title}</Title>
            <Amount>{amount}</Amount>
            <Small>{footerlabel}</Small>
            <Image src={dolarimg} alt={title}/>
        </Container>
    );
}

export { CardResume }