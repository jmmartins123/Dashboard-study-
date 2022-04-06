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
    amount: number;
}

export const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
    tagColor,
    title,
    subtitle,
    amount
}) => (
    <Container>
        <Tag 
            color={tagColor}
        />
        <ContentCard>
            <SpanTitle>{title}</SpanTitle>
            <SpanSubtitle>
                {new Intl.DateTimeFormat('pt-BR')
                .format(new Date(subtitle))}
            </SpanSubtitle>
        </ContentCard>
        <ValueReal>
            {new Intl.NumberFormat ('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(amount)}
        </ValueReal>
    </Container>    
);