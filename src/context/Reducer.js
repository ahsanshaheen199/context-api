import { REMOVE_USER, ADD_USER, UPDATE_USER } from './Actions.js'

export const Reducer = ( state, action ) => {
	switch( action.type ) {
		case ADD_USER: 
			return {
				...state,
				users: [
					action.payload,
					...state.users
				]
			}
			break;
		case UPDATE_USER :
			return {
				...state,
				users: [
					...state.users.map( user => {
						return user.id === action.payload.id ? action.payload : user
					} )
				]
			}
			break;
		case REMOVE_USER :
			return {
				...state,
				users: [
					...state.users.filter( user => user.id !== action.payload )
				]
			}
			break;
		default :
			return state
	}
}