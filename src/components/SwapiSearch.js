import React, { useState } from 'react';

function SwapiSearch() {
	const [ searched, setSearched ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ textInput, setTextInput ] = useState('');
	const [ searchResults, setSearchResults ] = useState([]);

	const handleSetInput = setStateCB => event => {
		const { target } = event;
		setStateCB(target.value);
	};

	const handleSearch = async searchParam => {
		try {
			const response = await fetch(`https://swapi.co/api/people/?search=${searchParam}`);
			const result = await response.json();
			return result;
		} catch(err) {
			throw err;
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!searched)
			setSearched(true);

		setLoading(true);

		handleSearch(textInput)
			.then(res => {
				setSearchResults(res.results);
				setTextInput('');
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setSearchResults([]);
				setLoading(false);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit} >
				<input
					onChange={handleSetInput(setTextInput)}
					type="text"
					value={textInput}
				/>
				<button>Search</button>
			</form>
			{searched ? (
				loading ? (
					<p>Loading...</p>
				) : (
					<ul>
						{searchResults.map(value => (
							<li key={value.name} >{value.name} - ({value.films.length}) films.</li>
						))}
					</ul>
				)
			) : <p>Search something...</p>}
		</div>
	);
}

export default SwapiSearch;
