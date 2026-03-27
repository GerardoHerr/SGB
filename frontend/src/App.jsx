import './App.css'
import  Inicio  from './Containers/Usuario/Inicio'
import SidebarGame from './componentes/Sidebar/SidebarGame'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import IngredientePage from './Containers/Ingrediente/IngredientePage'
import Producto from './Containers/Producto/Producto'
import Sidebar from './componentes/Sidebar/Sidebar'

function App() {
  return (
      <BrowserRouter>
          <div style={{ display: "flex" }}>

          <Sidebar />

          <div style={{ padding: "20px", width: "100%",marginLeft: "50px",transition: "margin-left 0.3s ease" }}>

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
