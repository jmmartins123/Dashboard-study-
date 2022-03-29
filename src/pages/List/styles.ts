import styled from "styled-components";

const Container = styled.div``;

const Content = styled.div``;

const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;

    .tag-filter{
        font-size: 1.2rem;
        background: none;
        color: ${props => props.theme.colors.white};
        font-weight: 500;
        
        transition: opacity 0.3s;
        opacity: 0.4;

        &:hover{
            opacity: 0.7;
        }       
    }

    .tag-filter-recurrent::after{
        content: '';
        display: block;
        margin: 0 auto;
        width: 4rem;
        border-bottom: 0.8rem solid ${props => props.theme.colors.sucess};
    }

    .tag-filter-eventual::after{
        content: '';
        display: block;
        margin: 0 auto;
        width: 4rem;
        border-bottom: 0.8rem solid ${props => props.theme.colors.warning};
    }

    .tag-actived{
        opacity: 1;
    }
    
`;


export {
    Container,
    Content,
    Filters
}