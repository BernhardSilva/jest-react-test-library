import React from 'react';

const Counter = () => {
	const [counter, setCounter] = React.useState(0);

	const handleClick = () => {
		setCounter((prev) => prev + 1);
	};

	return (
		<div>
			<h2>Counter: {counter}</h2>
			<button onClick={handleClick}>Increment</button>
		</div>
	);
};

export default Counter;
