import React from "react";

import styled from "styled-components";

const Container = styled.div`
box-shadow: 0 1.3px 12px -3px rgba( 0, 0, 0, 0.4);
background-color: rgb(254 226 226);
min-height: 23em;
max-height: 23em;
width:100%;

${`
     
    flex
    w-full
    flex-wrap
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    items-center
`};

`;


export function NewsSection(){

    return <Container>
             <h1>Here will come the news section </h1>
    </Container>
}

