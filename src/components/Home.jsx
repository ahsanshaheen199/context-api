import React,{ useContext } from 'react'
import { Heading } from './Heading'
import { UserList } from './UserList'
import { UserContext } from '../context/UserContext'

export const Home = () => {
	const {state, dispatch} = useContext(UserContext)
    return (
        <div>
            <Heading />
            {
            	state.users.length > 0 ? state.users.map( user => {
            		return (
            			<UserList key={user.id} name={user.name} userId={user.id} />
            		)
            	} )
            	: <h2>No User</h2>
            }
        </div>
    )
}
