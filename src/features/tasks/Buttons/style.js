import styled from "styled-components";

const Span = styled.span`
    display: flex;
    justify-content: center;

    @media (max-width: 466px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Button = styled.button`
    border: none;
    background-color: white;
    color: teal;
    padding: 0 10px;
    transition: 0.5s;

    &:hover {
        opacity: 0.7;
    }

    &:disabled {
        color: grey;
    }

    @media (max-width: 466px) {
        margin: 5px 0;
    }
`;

export { Span, Button };
