import styled, { css } from "styled-components";


const Ul = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Li = styled.li`
    display: ${({ display }) => display || "flex"};
    width: 100%;
    justify-content: space-around;
    border-bottom: 1px solid #eeeeee;
`;

const Button = styled.button`
    margin: 10px;
    height: 30px;
    width: 30px;
    color: white;
    box-shadow: none;
    border: none;
    align-self: center;
    padding: 10px;
    display: flex;
    transition: 0.5s;

    &:hover {
        opacity: 0.7;
    }

    ${({ done }) => done && css`
        background-color: green;
    `}

    ${({ toDelete }) => toDelete && css`
        background-color: red;
    `}
`;

const Span = styled.span`
    flex-grow: 1;
    align-self: center;
    white-space: normal;
    text-overflow: visible;
    padding: 5px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

const Icon = styled.div`
    text-align: center;
    align-self: center;
    justify-content: center;
    align-content: flex-start;

    ${({ done }) => done || css`
        display: none;
    `}
`;

export { Ul, Li, Button, Span, Icon };