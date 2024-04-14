import { useState } from 'react'

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";

import NavBar from './components/navBar/navBar';
import AddContact from './components/contacts/addContact/AddContact';
import ViewContact from './components/contacts/viewContact/ViewContact';
import EditContact from './components/contacts/editContact/EditContact';
import LandingPage from './components/contacts/landingPage/LandingPage';


import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
          <NavBar/>
        <Routes>
          <Route path={'/'} element= {<LandingPage/>} />
          <Route path={'/contacts/add'} element={<AddContact />}/>
          <Route path={'/contacts/view/:contactId'} element={<ViewContact />}/>
          <Route path={'/contacts/edit/:contactId'} element={<EditContact />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
