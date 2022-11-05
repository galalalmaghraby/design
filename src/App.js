import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import Tables from './components/Tables';
const App = () => {
  return (
      <BrowserRouter>
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/admin-table' element={<Tables />} />

            </Routes>
      </BrowserRouter>

  )
}

export default App;
