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
                            <p>Studentka, członkini Koła Naukowego Rozwoju Osobistego, miłośniczka jeździectwa i właścicielka Tesli 🐕</p>
                            <img width="300px" src="https://i.ibb.co/vj4Q16G/IMG-0416.jpg" alt="Piesek Tesla"></img>
                        </>
                    }
                />
            </Container>
        </MainContainer>
    );
}

export default Author;
