import React from 'react';

function ValueAndButtons(props) {
	const {
		value,
		onL,
		onR,
		lLabel = 'Left',
		rLabel = 'Right',
	} = props;

	return (
		<div>
			<p>Value: {value}</p>
			<button onClick={onL} >{lLabel}</button>
			<button onClick={onR} >{rLabel}</button>
		</div>
	);
}

export default ValueAndButtons;
