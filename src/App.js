import React from 'react';

import Context from 'components/Context';
import HelloWorld from 'components/HelloWorld';
import SwapiSearch from 'components/SwapiSearch';

function App() {
	return (
		<div className="App">
			<HelloWorld />
			<Context />
			<hr />
			<SwapiSearch />
		</div>
	);
}

export default App;
