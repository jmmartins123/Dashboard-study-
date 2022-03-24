import styled from "styled-components";

// grid-table-column, atribuo os valores de cada coluna;
// grid-table-rows, atribuo os valores de cada linha;
// grid-table-areas, monto como ficará distruibido minha grade; Primeira Coluna e Primeira Linha 


//**Asside = AS | **Content = CT | **MainHeader = MH


export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
    "AS MH"
    "AS CT";

    height: 100vh;

`;