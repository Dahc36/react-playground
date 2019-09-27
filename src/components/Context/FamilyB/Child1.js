import React from 'react';

import Child2 from './Child2';

function Child1() {
	console.log('FamilyB1');
	return (
		<div className="child">
			<h4>Family B: 1</h4>
			<Child2 />
		</div>
	);
}

export default Child1;
