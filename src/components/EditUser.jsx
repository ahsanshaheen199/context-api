import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { UPDATE_USER } from '../context/Actions'

export const EditUser = ( { history, match } ) => {
	const [selectedUser, setSelectedUser] = useState(null);
	const {state, dispatch} = useContext(UserContext)
	const currentUserId = match.params.id

	useEffect( () => {
		const users = state.users;
		const userFound = users.find( user => user.id === currentUserId )
		setSelectedUser(userFound)
	},[currentUserId] )

	const updateUserName = (e) => {
		setSelectedUser( {
			...selectedUser,
			name: e.target.value
		} )
	}

	const updateUser = (e) => {
		e.preventDefault()

		dispatch({
			type: UPDATE_USER,
			payload: {
				...selectedUser
			}
		});

		history.push('/')
	}

    return (
    		selectedUser ? (
		        <div>
		            <form onSubmit={updateUser}>
		            	<div className="mb-3">
		            		<label className="font-medium">Name</label>
		            		<div className="mt-1">
		            			<input 
		            				type="text"
		            				placeholder="Enter Name"
		            				className="px-3 py-4 rounded w-full border"
		            				onChange={ updateUserName }
		            				value={selectedUser.name}
		            			/>
		            		</div>
		            	</div>
		            	<div>
			            	<button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
			            		Edit Name
			            	</button>
			            	<Link to="/" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
			            		Cancel
			            	</Link>
		            	</div>
		            </form>
		        </div>
    		) : <h2>No User Found</h2>
    )
}
