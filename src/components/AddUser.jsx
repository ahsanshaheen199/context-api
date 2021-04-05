import React from 'react'
import { Link } from 'react-router-dom'

export const AddUser = () => {
    return (
        <div>
            <form>
            	<div className="mb-3">
            		<label className="font-medium">Name</label>
            		<div className="mt-1">
            			<input 
            				type="text"
            				placeholder="Enter Name"
            				className="px-3 py-4 rounded w-full border" 
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
