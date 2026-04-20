import { useState } from "react";
import { NavLink } from "react-router-dom"
import styles from "./Sidebar.module.css";  // ← Importas el CSS


export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const linkclass = ({isActive}) => isActive?'nav-link-active':'nav-link text-white'

    return (
        
        
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", height: "100vh" }}>
            
            <span className="fs-4">&#x1F33D;  Manufactos &#127994;</span>

            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                <NavLink to="/Inicio" className={linkclass}>
                    <i>&#127968;</i>
                    Home
                </NavLink>
                </li>
            
                <li className="nav-item">
                <NavLink to="/IngredientePage" className={linkclass}>
                    <i>&#129361;</i>
                    Ingredientes
                </NavLink>
                </li>
                
                <li className="nav-item">
                <NavLink to="/Producto" className={linkclass}>
                    <i>&#127981;</i>
                    Productos
                </NavLink>
                </li>


            </ul>
                
            
        </div>

    )
}