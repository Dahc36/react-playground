import React, { useContext } from 'react';

import { NumberContext } from '../context';
import ValueAndButtons from 'components/ValueAndButtons';

function Child2() {
	console.log('FamilyB2');
	const [ {value}, dispatch ] = useContext(NumberContext);
	return (
		<div className="child">
			<h4>Family B: 2</h4>
			<ValueAndButtons
				value={value}
				onL={_ => dispatch({type: 'DOWN'})}
				onR={_ => dispatch({type: 'UP'})}
				lLabel="Down"
				rLabel="Up"
			/>
		</div>
	);
}

export default Child2;
