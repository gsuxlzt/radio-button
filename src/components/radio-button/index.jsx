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
            sliceSelected(toSlice);
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

    render() {
        const { food, group, selected } = this.props;
        const index = group.split('-')[1];
        const isDisabled = index > 0 && index > selected.length;

        const className = index === 0 ? '' : isDisabled ? 'disabled' : '';
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