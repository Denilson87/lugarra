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

const PicContainer = styled.div`
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


export function NewsSection(){

    return <Container>
             
    </Container>
}

