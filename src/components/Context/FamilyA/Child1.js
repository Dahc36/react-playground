import React from 'react';

import Child2 from './Child2';

function Child1() {
	console.log('FamilyA1');
	// const [ {value} ] = useContext(NumberContext);
	return (
		<div className="child">
			<h4>Family A: 1</h4>
			{/*<p>Value: {value}</p>*/}
			<Child2 />
		</div>
	);
}

export default Child1;
