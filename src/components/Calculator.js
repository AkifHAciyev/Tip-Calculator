import React, { useEffect, useState } from 'react';
import './calc.css';

const Calculator = () => {
	const [price, setPrice] = useState({ bill: 50, tip: 18, number: 1 });

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setPrice({
			...price,
			[name]: +value,
		});
	};

	const total = (price.bill * price.tip) / 100;
	const totalToPerson = (price.bill * price.tip) / 100 / price.number;

	useEffect(() => {
		console.log(total);
	}, [price]);

	return (
		<>
			<label htmlFor="">
				<span>Bill</span>
				<input min={0} value={price.bill} name="bill" onChange={handleChange} type="number" />
				<span>Tip Percentage</span>
				<input min={0} value={price.tip} name="tip" onChange={handleChange} type="number" />
				<span>Number of People</span>
				<input min={0} value={price.number} name="number" onChange={handleChange} type="number" />
			</label>
			<div>
				<p>Total Tip : {total || `--`} $</p>
				<p>Tip Per Person : {totalToPerson || `--`} $</p>
			</div>
		</>
	);
};

export default Calculator;
