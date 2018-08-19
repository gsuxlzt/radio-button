import React, { Component } from 'react';
import { SubmitFormButton } from './styles';

class SubmitButton extends Component {
    state = {
        submitButtonText: 'submit'
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.setState({ submitButtonText: 'submitting...' });
        new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve();
            }, 1500);
        }).then(() => {
            this.setState({ submitButtonText: 'submitted!' });
            setTimeout(() => window.location.reload(true), 1000);
        })
    }

    render() {
        const { submitButtonText } = this.state;
        return (
            <SubmitFormButton className={this.props.selected.length < 3 ? 'disabled' : ''} onClick={e => this.onSubmitHandler(e)}>
                {submitButtonText}
            </SubmitFormButton>
        )
    }
}

export default SubmitButton;