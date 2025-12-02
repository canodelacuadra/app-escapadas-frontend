import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Rutas from './pages/Rutas'
import Creditos from './pages/Creditos'
import ListaRutas from './pages/ListaRutas'
import { FaGithub } from "react-icons/fa";
import Ruta from './pages/Ruta'

function App() {


  return (
    <>
      <header>
  
        <nav>
          <ul className='nav superior'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rutas">Rutas</Link></li>
             <li><Link to="/lista-rutas">Lista de Rutas</Link></li>
        
          </ul>
        </nav>
        
        
        
        </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/rutas' element={<Rutas/>}></Route>
          <Route path='/lista-rutas' element={<ListaRutas/>}></Route>
           <Route path="/ruta/:id" element={<Ruta />} />
       

        </Routes>
      </main>
      <footer>
        <p>&copy; 2025, canodelacuadra-Alcorcón 
          <a href="https://github.com/canodelacuadra"><FaGithub /></a>
        </p>
      </footer>

    </>
  )
}

export default App
