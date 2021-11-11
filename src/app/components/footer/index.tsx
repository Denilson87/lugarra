import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `};
`;

const AboutText = styled.p`
 
 ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
    text-justify
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};
  & > a {
    ${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Lugara é uma empresa de aluguel e venda de carros localizada em muitos
            países em todo o mundo que têm carros de alta qualidade e os melhores
            serviço.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Inicio</a>
            </ListItem>
            <ListItem>
              <a href="#">Quem somos?</a>
            </ListItem>
            <ListItem>
              <a href="#">Serviços</a>
            </ListItem>
            <ListItem>
              <a href="#">Modelos</a>
            </ListItem>
            <ListItem>
              <a href="#">Nosso Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>outros Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Perguntas frequentes</a>
            </ListItem>
            <ListItem>
              <a href="#">Contacte-nos</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Politicas</a>
            </ListItem>
            <ListItem>
              <a href="#">Termos &amp; Condições</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Ligue já </HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+258 849553898</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>E-mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@lugara.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} lugara. todos direitos reservados.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}