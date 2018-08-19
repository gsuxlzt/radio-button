import styled from 'styled-components';

export const ButtonsContainer = styled.ul`
    list-style: none;
    padding-left: 20px;
    padding-right: 20px;
    border: 2px solid #debea0;
    &.disabled {
        color: #bcb4ba !important;
        border: 2px solid #bcb4ba !important;
   }
   align-self: stretch;
   flex: 1;
`;

export const ButtonContainer = styled.li`
    position: relative;
    &:hover > label {
        color: #362247;
        font-size: 1.1rem;
    }
    &:hover > label:before {
        border: 0.3rem solid #362247;

        margin-right: 1rem;
    }
    & label:last-child {
        padding-bottom: 0.5rem;
    }
`;

export const ButtonInput = styled.input`
    position: absolute;
    opacity: 0;
    visibility: hidden;
    &:disabled + label {
        color: #bcb4ba !important;
    }
    &:disabled +label:hover {
        font-size: 1rem !important;
    }
    &:disabled + label:hover:before {
        border: 0.25rem solid #bcb4ba !important;
        margin-right: 0.5rem !important;

    }
    &:disabled + label:before {
        border: 0.25rem solid #bcb4ba !important;
    }
    &:checked + label {
        color: #362247;
        font-weight: bold;
    }
    &:checked + label:before {
        margin-right: 1rem;
        border: 0.25rem solid #362247;
        background: #362247;
    }
`

export const ButtonLabel = styled.label`
    display: flex;
    align-items: center;
    padding: 0.25rem 0;
    font-size: 1 rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s linear;
    &:before {
        display: inline-block;
        content: "";
        height: 1rem;
        width: 1rem;
        margin-right: 0.5rem;
        border: 0.25rem solid #000;
        border-radius: 50%;
        transition: all 0.25s linear;
    }
`

