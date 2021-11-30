import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/images/jeep.png"

const AboutUsContainer = styled.div`

 ${tw`
    
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;


const CarContainer = styled.div`
  width: auto;
  height: 12em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 18em;
    width:45em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;
const InfoContainer =styled.div`
  
   ${tw`
     md:w-1/2
     flex
     flex-col
     flex-wrap
     md:ml-6
     2xl:ml-16
     
       
   `};
`;

const Title = styled.h1`

${tw`
 
   text-black
   text-2xl
   md:text-5xl
   font-extrabold
   md:font-black
   md:leading-normal

`};

`;

const InfoText = styled.p`

${tw`
   max-w-2xl
   text-sm
   md:text-base
   text-gray-500
   mt-4
   font-normal
   text-justify

`};

`;



export function AboutUs(){

    return (<AboutUsContainer>
        
          <CarContainer>
              <img src={JeepImg}/>
          </CarContainer>
          <InfoContainer>
              <Title>Disfrute da melhor experiencia alugando as nossas viaturas</Title>
          <InfoText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          </InfoText>
          </InfoContainer>
    </AboutUsContainer>
    );
}