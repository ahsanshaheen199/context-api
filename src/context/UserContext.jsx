import React, { createContext, useReducer } from 'react'
import { Reducer } from './Reducer'

const initialState = {
	users: []
}

export const UserContext = createContext()

export const UserContextProvider = ( { children } ) => {
	const [state, dispatch] = useReducer( Reducer, initialState );

	return(
		<UserContext.Provider value={{ state, dispatch }}>
			{ children }
		</UserContext.Provider>
	)
}