import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
`;

const Input = styled.input`
    border: 1px solid #ccc;
    flex-grow: 1;
    padding: 9px;
    align-self: center;

    @media (max-width: 767px) {
        height: 45px;
    }
`;

const Button = styled.button`
    background-color: teal;
    box-shadow: 0 0 5px #ccc;
    border: none;
    color: rgba(255, 255, 255, 0.801);
    transition: 0.5s;
    margin-left: 15px;

    &:hover {
        opacity: 0.7;
        transform: scale(1.1);
    }

    @media (max-width: 767px) {
        flex-grow: 1;
        align-self: center;
        height: 45px;
        margin: 10px;
    }
`;

export { StyledForm, Input, Button };