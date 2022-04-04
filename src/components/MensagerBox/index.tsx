import React from "react";
import { 
    Container,
    Header,
    Title,
    Image,
    Text,
    Footer    
} from "./styles";

interface IMensagerProps{
    title: string;
    description: string;
    footertext: string;
    icon: string;
}

const MensagerBox: React.FC<IMensagerProps> = ({
    title,
    description,
    footertext,
    icon
}) => {
    return(
        <Container>
           <Header>
                <Title> {title} 
                   <Image src={icon} alt={title}/>
                </Title>
                <Text>
                   {description}
                </Text>
            </Header>
            <Footer>                        
                {footertext}                   
            </Footer>          
        </Container>
    );
}

export { MensagerBox }