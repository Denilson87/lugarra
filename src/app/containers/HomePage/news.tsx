import React from "react";

import styled from "styled-components";


const Container = styled.div`
box-shadow: 0 1.3px 12px -3px rgba( 0, 0, 0, 0.4);
background-color: rgb(254 226 226);
${`

w-full
flex
flex-col
pb-2
lg:pt-0
lg:pb-0

`};

`;


export function NewsSection(){

    return <Container>
             <h1>hello</h1>
    </Container>
}

