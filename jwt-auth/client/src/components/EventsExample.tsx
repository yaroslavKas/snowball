import React, {FC, useState} from "react";

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('');


	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log('value', value)
	}



	// const {deepStrictEqual} = require("assert");
	//
	// const banknotes = [500, 200, 100, 50, 20, 5, 2, 1];
	//
	// function getCash(amount) {
	// 	return banknotes.reduce((acc, item) => {
	// 		const result = Math.floor(amount  / item);
	// 		const remainder = amount - result * item;
	// 		const newResult = [];
	//
	//
	// 		if(remainder !== 0) {
	//
	// 			for (let i = 0; i < result; i++) {
	// 				newResult.push(1)
	// 			}
	//
	//
	// 			console.log('newResult',newResult)
	//
	// 			const firstCash = [...acc,  ...newResult.map(elem => {
	// 				return item
	// 			})]
	//
	// 		}
	// 		console.log('newResult',newResult)
	//
	// 		amount = remainder;
	//
	// 		return [...acc]
	// 	},[])
	// }
	//
	// deepStrictEqual(getCash(1251), [500, 500, 200, 50, 1]);
	// deepStrictEqual(getCash(315), [200, 100, 5, 5, 5]);
	// deepStrictEqual(getCash(534), [500, 20, 5, 5, 2, 2]);
	// deepStrictEqual(getCash(974), [500, 200, 200, 50, 20, 2, 2]);

	return (
		<div>
			<input value={value} onChange={changeHandler} type="text"/>
			<button onClick={clickHandler}>Button</button>
		</div>
	)
}

export default EventsExample