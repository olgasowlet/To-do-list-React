import React from 'react';
import Section from '../../common/Section';
import Header from "../../common/Header";
import Container from "../../common/Container";
import MainContainer from "../../common/MainContainer";


function Author() {
    return (
        <MainContainer>
            <Header
                title="O autorze"
            />
            <Container>
                <Section
                    title="Olga Sowińska"
                    body={
                        <>
                            <p>Miło, że tu jesteś! Jeśli jesteś rekruterem to nie wahaj się i śmiało się ze mną skontaktuj! 😁 Będzie mi wtedy jeszcze milej 😏</p>
                        </>
                    }
                />
            </Container>
        </MainContainer>
    );
}

export default Author;
