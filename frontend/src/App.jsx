import './App.css'
import  Inicio  from './Containers/Usuario/Inicio'
import Sidebar from './Componentes/Sidebar'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import IngredientePage from './Containers/Ingrediente/IngredientePage'
import Producto from './Containers/Producto/Producto'

function App() {
  return (
      <BrowserRouter>
          <div style={{ display: "flex" }}>

          <Sidebar />

          <div style={{ padding: "20px", width: "100%" }}>

            <Routes>

              <Route path="/Inicio" element={<Inicio />} />
              <Route path="/IngredientePage" element={<IngredientePage />} />
              <Route path="/Producto" element={<Producto />} />

            </Routes>

          </div>

        </div>
      </BrowserRouter>
    
  )
}

export default App
