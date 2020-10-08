import React from "react";
import "../Container/style.css";

const Section = ({ title, extrasToHeader, body }) => (
    <React.Fragment>
        <section className="section">
            <h2 className="section__header">{title}</h2>
            {extrasToHeader}
        </section>
        <section className="section">
            <div className="section__div section__div--tasks">
                {body}
            </div>
        </section>
    </React.Fragment>
);

export default Section;

//Wiem, że tutaj słabo stworzyłam znaczniki. Mam dwie sekcje, które mają różne zawartosci (w przeciwieństwie do Chrisa, który ma header i body w jednym section).
// Dlatego musiałam dodać to wszystko w divie albo stworzyć 2 różne komponenty. 
//Teraz idę nadrbiać ale zostawiam ten komenatrz, żeby to kiedyś poprawić :D

//EDIT: zamiast <div> <React.Fragment> :D