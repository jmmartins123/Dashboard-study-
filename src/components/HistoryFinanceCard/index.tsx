import react from 'react';
import { 
    Container,
    Tag,
    ContentCard,
    SpanTitle,
    SpanSubtitle,
    ValueReal
} from "./styles";

interface IHistoryFinanceCard {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string
}

export const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
    tagColor,
    title,
    subtitle,
    amount
}) => {
    return(
        <>
            <Container>
                <Tag color={tagColor}/>
                <ContentCard>
                    <SpanTitle>{title}</SpanTitle>
                    <SpanSubtitle>{subtitle}</SpanSubtitle>
                </ContentCard>
                <ValueReal>{amount}</ValueReal>
            </Container>
        </> 
    );
}