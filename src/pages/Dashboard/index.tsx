import React from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import { 
  Container
} from "./styles";

export const Dashboard: React.FC = () => {
  
  const options = [
    {value: 'Rodrigo', label: 'Rodrigo'},      
    {value: 'Ana', label: 'Ana'},   
    {value: 'Jhon', label: 'Jhon'}        
  ]
    return (
      <Container>                
          <ContentHeader 
            title={"Dashboard"} 
            lineColor="#f7931b"
          >
            <SelectInput 
              options={options} 
              onChange={() => {}}
            />
          </ContentHeader>                          
      </Container>
    );
}