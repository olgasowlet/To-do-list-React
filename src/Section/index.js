import React from "react";
import { Section, H2, Div } from "./style.js";

const Sections = ({ title, extrasToHeader, body }) => (
    <React.Fragment>
        <Section>
            <H2>{title}</H2>
            {extrasToHeader}
        </Section>
        <Section>
            <Div>
                {body}
            </Div>
        </Section>
    </React.Fragment>
);

export default Sections;
