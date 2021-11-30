import {
    faCalendarAlt,
    faCarSide,
    faMapMarkedAlt,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
padding-top: -30px;
${tw`

 w-full
 flex
 flex-col
 items-center
 pb-3
 lg:pt-0
 lg:pb-0
 
`};

`;

const Title = styled.div`

${tw`
    text-3xl
    font-extrabold
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-14
    m-3

`};
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `};
`;

const StepContainer =styled.div`

${tw`

     flex
     flex-col
     md:w-96
     items-center
     transition-colors
     hover:text-red-500
     m-3
`};

`;

const Step = styled.div`
box-shadow: 0 1.3px 12px -3px rgba( 0, 0, 0, 0.4);
   ${tw`
   
     flex
     rounded-lg
     items-center
     justify-center
     p-6
       
   `};
`;

const StepTitle=styled.h4`

   
    ${tw`
         text-black
         text-lg
         font-semibold
         mt-4     
    
    
    `};
`;

const StepDescription = styled.p`

${tw`
   w-10/12
   text-xs
   md:text-sm
   text-center
   text-gray-600

`};

`;

const StepIcon = styled.p`

${tw`
   text-red-500
   text-3xl
   

`};

`;


export function BookingSteps(){


    return <Container>
        <Title>Como alugar um carro ?</Title>
          <StepsContainer>
           <StepContainer>
               <Step>
                   <StepIcon>
                   <FontAwesomeIcon icon={faMapMarkedAlt} />
                   </StepIcon>
               </Step>
               <StepTitle>Escolha o lacal</StepTitle>
               <StepDescription>
                   Encontre o carro mais proximo do teu local
               </StepDescription>
           </StepContainer>

           <StepContainer>
               <Step>
                   <StepIcon>
                   <FontAwesomeIcon icon={faCalendarAlt} />
                   </StepIcon>
               </Step>
               <StepTitle>Escolha o dia</StepTitle>
               <StepDescription>
                   Selecione o melhor dia para alugar o carro.
               </StepDescription>
           </StepContainer>
           
           <StepContainer>
               <Step>
                   <StepIcon>
                   <FontAwesomeIcon icon={faCarSide} />
                   </StepIcon>
               </Step>
               <StepTitle>Reserve seu carro</StepTitle>
               <StepDescription>
                   Reserve teu carro com um simples click!
               </StepDescription>
           </StepContainer>
        
          </StepsContainer>
          
    </Container>
}