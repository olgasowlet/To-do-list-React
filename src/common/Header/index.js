import React from 'react';
import { Title, StyledHeader } from "./style.js";

const Header = ({title}) => (
    <StyledHeader className="header">
        <Title className="header__title">{title}</Title>
    </StyledHeader>
);

export default Header;