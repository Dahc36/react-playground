import React, { createContext, useReducer } from 'react';

const initialValue = {
	value: 42,
};

const NumberContext = createContext(initialValue);

function myContextReducer(state, action) {
	switch (action.type) {
		case 'UP':
			return {
				...state,
				value: state.value + 1
			};
		case 'DOWN':
			return {
				...state,
				value: state.value - 1
			};
		default:
			return state;
	}
}

function NumberProvider({children}) {
	return (
		<NumberContext.Provider value={useReducer(myContextReducer, initialValue)}>
			{children}
		</NumberContext.Provider>
	);
}

export {
	NumberContext,
	NumberProvider as default
};
