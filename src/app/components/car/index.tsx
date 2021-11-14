import { faEllipsisH, faFillDrip, faTachometerAlt, faTeeth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";

interface ICarProps extends ICar {

}

const CarContainer = styled.div`
width: 16.6em;
min-height: 23em;
max-height: 23em;
box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
${tw`

flex
flex-col
items-center
p-3
pb-4
bg-white
rounded-md
m-1
sm:m-3
md:m-6


`};

`;

const CarThumbnails = styled.div`

width: 100%;
height: auto;

img{
    width: 100%;
    height: 100%;

}
`;


const CarName = styled.h3`

${tw`
  text-base
  font-bold
  text-black
  mt-1
  mb-1


`};

`;


const PriceContainer = styled.div`

${tw`

w-full
flex
justify-start
mt-3

`};
`;

const DailyPrice = styled.h5`

${tw`
text-red-500
font-bold
text-sm
mr-3

`};

`;


const MonthlyPrice = styled.h5`

${tw`
text-gray-500
font-bold
text-sm

`};

`;


const SmallIcon = styled.span`

${tw`

text-gray-400
text-sm
mr-1


`};

`;

const CarDetailsContainer = styled.div`

${tw`

flex
w-full
justify-between

`};

`;

const CarDetail = styled.span`

${tw`

flex
items-center


`};


`;

const CarInfo = styled.h6`

${tw`

text-gray-400
text-xs
`};
`;

const Separator = styled.div`

min-width: 100%;
min-height: 1px;
${tw`

flex
bg-gray-300
mt-2
mb-2
`};

`;


const RentButton = styled(Button)`

${tw`

min-w-full
mt-5
`};
`;

const SmallText = styled.p`

color :inherit;

${tw`

text-xs
inline-flex   
font-thin

`};
`;


export function Car(props: ICarProps) {

    const { name, thumbnailsSrc, dailyPrice, monthlyPrice, mileage, gearType, gas } = props;
    return <CarContainer>
        <CarThumbnails>
            <img src={thumbnailsSrc} />
        </CarThumbnails>

        <CarName>{name}</CarName>

        <PriceContainer>
            <DailyPrice>{dailyPrice} MT<SmallText>/Por dia</SmallText></DailyPrice>
            <MonthlyPrice>{monthlyPrice} MT<SmallText>/Por Mes</SmallText></MonthlyPrice>
        </PriceContainer>
        <Separator />
        <CarDetailsContainer>
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faTachometerAlt} />
                </SmallIcon>
                <CarInfo>{mileage}</CarInfo>
            </CarDetail>
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </SmallIcon>
                <CarInfo>{gearType}</CarInfo>
            </CarDetail>
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faFillDrip} />
                </SmallIcon>
                <CarInfo>{gas}</CarInfo>
            </CarDetail>
        </CarDetailsContainer>
        <RentButton text="Alugar agora" />
    </CarContainer>

}