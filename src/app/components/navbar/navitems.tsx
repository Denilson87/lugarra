import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";


const ListContainer = styled.ul`

${tw`
     flex
     list-none
     `};
    `;

const NavItem = styled.li<{ menu?: any }>`
   ${tw`
   text-sm
   text-xs
   md:text-base
   text-black
   font-medium
   md:mr-5
   cursor-pointer
   transition
   duration-300
   ease-in-out
   hover:text-gray-700
   `};

   ${({ menu }) => menu && css`
   
   ${tw`
   text-white
   text-xl
   mb-3 
   focus:text-white  
    `};
   `};
`;

export function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    if (isMobile)
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <a href="#">Inicio</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Carros</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Servicos</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Contacte-nos</a>
                    </NavItem>
                </ListContainer>
            </Menu>

        )

    return (
        <ListContainer>
            <NavItem >
                <a href="#">Inicio</a>
            </NavItem>
            <NavItem >
                <a href="#">Viaturas</a>
            </NavItem>
            <NavItem >
                <a href="#">Serviços</a>
            </NavItem>
            <NavItem >
                <a href="#">Contacte nos</a>
            </NavItem>
        </ListContainer>
    );
}