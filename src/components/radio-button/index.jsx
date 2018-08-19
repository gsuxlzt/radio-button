import React, { Component } from 'react';
import { ButtonsContainer, ButtonContainer, ButtonInput, ButtonLabel } from './styles.js';


class RadioButton extends Component {
    state = {
        checked: null
    }
    onRadioButtonClick(e, toPush) {
        if (e.target.parentNode.querySelector('input').disabled) e.preventDefault();
        else {
            this.setState({ checked: toPush.id })
            this.props.handleClick(e, toPush);
        }
    }

    componentDidUpdate() {
        const { checked } = this.state;
        const { sliceSelected, group } = this.props;
        if (this.determineIfDisabled(false, checked)) {
            const toSlice = group.split('-')[1];
            this.setState({ checked: null });
            sliceSelected(toSlice);
        }
        const isDisabled = this.checkIfDisabled();
        if (isDisabled && this.state.checked) {
            this.setState({ checked: null });
        }

    }

    determineIfDisabled(isDisabled, id) {
        const { selected, foodCompatibility } = this.props;
        if (isDisabled) return true;
        let shouldDisable = false;
        selected.forEach(food => {
            if (foodCompatibility.hasOwnProperty(food.id)) {
                shouldDisable = shouldDisable === true ? true : foodCompatibility[food.id].includes(Number(id));
            }
        })
        return shouldDisable;
    }

    checkIfDisabled() {
        const { group, selected } = this.props;
        const index = group.split('-')[1];
        return index > 0 && index > selected.length;


    }

    render() {
        const { food, group } = this.props;
        const isDisabled = this.checkIfDisabled();
        const className = group.split('-')[1] === 0 ? '' : isDisabled ? 'disabled' : '';
        return (
            <ButtonsContainer className={className}>
                {food.map((item, index) => (
                    <ButtonContainer key={index}>
                        <ButtonInput checked={item.id === this.state.checked && !this.determineIfDisabled(isDisabled, item.id)} type="radio" disabled={this.determineIfDisabled(isDisabled, item.id)} name={group} value={item.value} id={item.id} />
                        <ButtonLabel htmlFor={item.id} onClick={e => this.onRadioButtonClick(e, { group, id: item.id })}>
                            {item.value}
                        </ButtonLabel>
                    </ButtonContainer>
                ))}
            </ButtonsContainer>
        )
    }
}

export default RadioButton;