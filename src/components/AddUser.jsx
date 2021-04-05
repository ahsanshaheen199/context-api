import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { ADD_USER } from '../context/Actions'
import { UserContext } from '../context/UserContext'

export const AddUser = ( { history } ) => {
	const [name, setName] = useState('')
	const {state, dispatch} = useContext(UserContext)

	const addUser = (e) => {
		e.preventDefault()

		if( name == '' ) {
			return;
		}

		dispatch({
			type: ADD_USER,
			payload: {
				id: uuid(),
				name
			}
		});

		history.push('/')
	}

    return (
        <div>
            <form onSubmit={addUser}>
            	<div className="mb-3">
            		<label className="font-medium">Name</label>
            		<div className="mt-1">
            			<input 
            				type="text"
            				placeholder="Enter Name"
            				className="px-3 py-4 rounded w-full border"
            				value={name}
            				onChange={ e => setName(e.target.value) } 
            			/>
            		</div>
            	</div>
            	<div>
	            	<button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
	            		Submit
	            	</button>
	            	<Link to="/" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
	            		Cancel
	            	</Link>
            	</div>
            </form>
        </div>
    )
}
