import styled from 'styled-components';

export const ButtonsForm = styled.form`
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    @media only screen and (min-width: 426px) {
        max-width: 50%;
    }
    @media only screen and (min-width: 769px) {
        max-width: 25%;
    }

`;