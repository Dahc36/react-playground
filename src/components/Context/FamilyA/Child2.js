import React, { useContext } from 'react';

import { NumberContext } from '../context';

function Child2() {
	console.log('FamilyA2');
	const [ {value} ] = useContext(NumberContext);
	return (
		<div className="child">
			<h4>Family A: 2</h4>
			<p>Value: {value}</p>
		</div>
	);
}

export default Child2;
