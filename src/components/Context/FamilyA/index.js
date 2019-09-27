import React from 'react';

import Child1 from './Child1';

function FamilyA() {
	console.log('FamilyA');
	return (
		<div>
			<h3>Family A: 0</h3>
			<Child1 />
		</div>
	);
}

export default FamilyA;
