import React from 'react'
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { UserContextProvider } from './context/UserContext'

function App() {
  return (
  	<div className="w-1/3 mx-auto my-6 shadow p-6">
  		<UserContextProvider>
		    <BrowserRouter>
		      <Route path="/" exact component={Home} />
		      <Route path="/add" component={AddUser} />
		      <Route path="/edit/:id" component={EditUser} />
		    </BrowserRouter>
  		</UserContextProvider>
  	</div>
  )
}

export default App
