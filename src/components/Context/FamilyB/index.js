import React from 'react';

import Child1 from './Child1';

function FamilyB() {
	console.log('FamilyB');
	return (
		<div>
			<h3>Family B: 0</h3>
			<Child1 />
		</div>
	);
}

export default FamilyB;
