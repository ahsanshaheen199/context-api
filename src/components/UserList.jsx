import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { REMOVE_USER } from '../context/Actions'

export const UserList = ({ name, userId }) => {
	const {state, dispatch} = useContext(UserContext)

	const deleteUser = ( userId ) => {
		dispatch({
			type: REMOVE_USER,
			payload: userId
		})
	}
    return (
        <div className="flex items-center p-3 border border-gray-300 rounded mb-3">
            <div className="w-1/2">
            	<h2>{ name }</h2>
            </div>
            <div className="w-1/2">
            	<div className="text-right">
            		<Link to={`/edit/${userId}`} className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            			Edit	
            		</Link>
            		<button onClick={ () => deleteUser(userId) } className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            			Delete
            		</button>
            	</div>
            </div>
        </div>
    )
}
