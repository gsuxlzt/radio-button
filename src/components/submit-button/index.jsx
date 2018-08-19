import React from 'react';
import { SubmitFormButton } from './styles';

const SubmitButton = (props) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.handleSubmit();
    }
    return (
        <SubmitFormButton className={props.selected.length < 3 ? 'disabled' : ''} onClick={e => onSubmitHandler(e)}>
            Submit
        </SubmitFormButton>
    );
}

export default SubmitButton;