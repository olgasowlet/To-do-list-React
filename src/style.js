import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: white;

    &.${activeClassName} {
        border-bottom: 2px solid white;
    }
`;

const Nav = styled.nav`
    background-color: teal;
    height: 4.5em;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 100%;
    column-gap: 40px;
`;

const Li = styled.li`
    font-size: 1.6em;
`;
    

export { StyledNavLink, Nav, Ul, Li };