import React from "react";
import { Div } from "./style.js";


const Container = (props) => (
    <Div>
        {props.children}
    </Div>
);

export default Container;
