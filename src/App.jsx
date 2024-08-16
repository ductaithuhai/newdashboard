import React, { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Dashboard from './components/dashboard'
import Layout from './components/shared/Layout';
import User from './features/pages/users';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
