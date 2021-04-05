import React from 'react'
import { Link } from 'react-router-dom'

export const Heading = () => {
    return (
        <div className="flex items-center bg-gray-800 p-4 rounded mb-4">
            <div className="w-1/2">
                <h2 className="font-medium text-white">Team</h2>
            </div>
            <div className="w-1/2">
                <div className="text-right">
                    <Link to="/add" className="rounded px-4 py-2 border border-transparent text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white">
                        Add User
                    </Link>
                </div>
            </div>
        </div>
    )
}
