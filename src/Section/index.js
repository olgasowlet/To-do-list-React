import React from "react";
import { Section, H2, Div } from "./style.js";

const Sections = ({ title, extrasToHeader, body }) => (
    <React.Fragment>
        <Section className="section">
            <H2 className="section__header">{title}</H2>
            {extrasToHeader}
        </Section>
        <Section className="section">
            <Div className="section__div section__div--tasks">
                {body}
            </Div>
        </Section>
    </React.Fragment>
);

export default Sections;
