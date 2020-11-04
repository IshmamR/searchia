import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

export const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children }) => {

	return (
		<StateContext.Provider value={ useReducer(reducer, initialState) }>
			{children}
		</StateContext.Provider>
	)
}

// hook that allows to pull infos
export const useStateValue = () => useContext(StateContext);

export default StateProvider;