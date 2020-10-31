import styled from "styled-components";

const Section = styled.section`
    background-color: white;
    padding: 15px;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    flex-wrap: wrap;
    margin: 2px;
`;

const H2 = styled.h2`
    flex-grow: 1;
    align-self: center; 
    justify-self: center;
    margin: 8px;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100vw;
`;

export { Section, H2, Div };