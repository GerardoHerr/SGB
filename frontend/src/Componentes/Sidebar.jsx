import { NavLink } from "react-router-dom"
export default function Sidebar() {
    const linkclass = ({isActive}) => isActive?'nav-link-active':'nav-link text-white'

    return (
        
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", height: "100vh" }}>
            
            <span className="fs-4">Sidebar</span>

            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                <NavLink to="/Inicio" className={linkclass}>
                    <i className="bi bi-house me-2"></i>
                    Home
                </NavLink>
                </li>
            
                <li className="nav-item">
                <NavLink to="/IngredientePage" className={linkclass}>
                    <i className="bi bi-apple me-2"></i>
                    Ingredientes
                </NavLink>
                </li>
                
                <li className="nav-item">
                <NavLink to="/Producto" className={linkclass}>
                    <i className="bi bi-apple me-2"></i>
                    Productos
                </NavLink>
                
                </li>


            </ul>
                

        </div>

    )
}