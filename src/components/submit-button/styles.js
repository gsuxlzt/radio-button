import styled from 'styled-components';

export const SubmitFormButton = styled.button`
    line-height: 2.5rem;
    margin-top: 10px;
    align-self: stretch;
    height: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    color: #fff;
    border: 2px solid #a4545f;
    background-color: #a4545f;
    box-shadow: 0 10px 14px -10px rgba(0, 0, 0, 0.5);
    padding: 0 .625px;
    cursor: pointer;
    transition: 0.25s all linear;
    &.disabled {
        background-color: #bcb4ba;
        border: 2px solid #bcb4ba;
        &:hover {
            background-color: #bcb4ba;
            border: 2px solid #bcb4ba;
            box-shadow: 0 10px 14px -10px rgba(0, 0, 0, 0.5);
            color: #fff;
        }
    }
    &:hover {
        color: #a4545f;
        background-color: #fff;
        box-shadow: none;
        text-shadow: none;
    }
    &:focus, &:active {
        outline: none;
    }
`;

