import React from 'react';

const Child = ({ onTextChange }) => {
	const [inputValue, setInputValue] = React.useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = () => {
		onTextChange(inputValue);
	};

	return (
		<div>
			<h2>Child Component</h2>
			<input value={inputValue} onChange={handleChange} placeholder='Enter your name' />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default Child;
