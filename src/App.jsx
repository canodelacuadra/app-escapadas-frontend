import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Rutas from './pages/Rutas'
import Creditos from './pages/Creditos'
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
    <header>
      <h1> Rutas de tu Tierra</h1>
      <nav className="nav-superior">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rutas">Rutas</Link></li>
          <li><Link to="/creditos">Créditos</Link></li>
        </ul>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/rutas" element={<Rutas />}>Rutas</Route>
          <Route path="/creditos" element={<Creditos />}>Créditos</Route>
        </Routes>
      </main>
      <footer>
        <p> &copy; 2025, canodelacuadra - Alcorcón 
          <a href="https://github.com/canodelacuadra"> <FaGithub/></a>
           </p>
      </footer>

    </>
  )
}

export default App
