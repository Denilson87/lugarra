import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { BookingSteps } from "./bookingSteps";
import { AboutUs } from "./aboutUs";
import { TopCars } from "./topCars";
import { Footer } from "../../components/footer";
import { NewsSection } from "./news";


const PageContainer = styled.div`
 
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
 `}

`;
export function HomePage(){
    return <PageContainer>
        <Navbar/>
        <TopSection/>
        <Marginer direction="vertical" margin="1em"/>
        <BookCard/>
        <Marginer direction="vertical" margin="5em"/>
        <BookingSteps/>
        <Marginer direction="vertical" margin="2em"/>
        <AboutUs/>
        <Marginer direction="vertical" margin="2em"/>
        <TopCars/>
        <NewsSection/>
        <Footer/>
    </PageContainer>
}