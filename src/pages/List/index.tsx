import React from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import { 
  Container 
} from "./styles";

export const List: React.FC = () => {
  const options = [
    {value: 'Maça', label: 'Maça'},
    {value: 'Uva', label: 'Uva'},
    {value: 'Laranja', label: 'Laranja'},
  ]

  return (
    <>        
      <Container>
        <ContentHeader title={"Saídas"} lineColor={"#e44c4e"}>
            <SelectInput options={options} />
        </ContentHeader>
      </Container>
    </>
  );
}