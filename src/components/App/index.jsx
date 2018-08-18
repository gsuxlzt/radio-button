import React, { Component } from 'react';
import RadioButton from '../radio-button';
import { ButtonsForm } from './styles.js';

class App extends Component {
	constructor(props) {
		super(props);
		const foodArray = [
			// first group of radio-buttons
			[
				{ id: '101', value: 'Vegetarian' },
				{ id: '102', value: 'Nut allergy' },
				{ id: '103', value: 'Halal' }
			],
			// second group of radio-buttons
			[
				{ id: '201', value: 'Cashew chicken' },
				{ id: '202', value: 'Sweet and sour pork' },
				{ id: '203', value: 'Stir fried Tofu' },
				{ id: '204', value: 'Vegetable fried rice' },
				{ id: '205', value: 'Pad Thai' },
				{ id: '206', value: 'Massaman beef' },
			],
			// third group of radio-buttons
			[
				{ id: '301', value: 'Peanut sauce' },
				{ id: '302', value: 'Oyster sauce' },
				{ id: '303', value: 'Vegetable spring rolls' },
				{ id: '304', value: 'Steamed rice' },
			],
		];
		const foodCompatibility = {
			// 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
			101: [201, 202, 206, 302],
			// 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
			102: [201, 301],
			// 'Halal' is NOT compatible with 'Sweet and sour pork',
			103: [202],
			// 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
			204: [304],
			// 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
			205: [304],
		};
		this.state = {
			foodArray,
			foodCompatibility,
			selected: []
		}
	}

	sliceSelected(toSlice) {
		const { selected } = this.state;
		const newArr = [...selected];
		newArr.splice(toSlice);
		this.setState({
			selected: newArr
		})
	}

	handleClick(e, toPush) {
		const { selected } = this.state;
		let newArr = []
		const isExisting = selected.some(item => item.group === toPush.group);
		if (!isExisting) newArr = [...selected, toPush];
		else newArr = selected.map(item => {
			if (item.group === toPush.group) item.id = toPush.id;
			return item;
		});
		this.setState({ selected: newArr });

	}
	render() {
		const { foodArray, selected, foodCompatibility } = this.state;
		return (
			<ButtonsForm>
				{foodArray.map((food, index) => <RadioButton key={index}
					handleClick={this.handleClick.bind(this)}
					food={food} selected={selected}
					foodCompatibility={foodCompatibility}
					sliceSelected={this.sliceSelected.bind(this)}
					group={`food-${index}`}
				/>
				)}
			</ButtonsForm>
		)
	}
}

export default App;
