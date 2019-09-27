import React from 'react';

import './index.scss';
import NumberProvider from './context';
import FamilyA from './FamilyA';
import FamilyB from './FamilyB';

function Context() {
	return (
		<NumberProvider>
			<FamilyA />
			<FamilyB />
		</NumberProvider>
	);
}

export default Context;
