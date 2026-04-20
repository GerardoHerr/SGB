import { useState } from "react"; // 1. Importamos el hook para el estado
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    // 2. Definimos si el menú está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    const linkclass = ({ isActive }) => 
        isActive ? 'nav-link-active' : 'nav-link text-white';

    return (
        <div>
            {/* 3. El botón cambia el estado de 'isOpen' al hacer clic */}
            <button 
                id="menuToggle" 
                onClick={() => setIsOpen(!isOpen)}
                style={{ fontSize: '2rem', cursor: 'pointer', background: 'none', border: 'none' }}
            >
                ≡
            </button>

            {/* 4. Usamos renderizado condicional: si isOpen es true, muestra el aside */}
            {isOpen && (
                <aside id="menu">
                    <nav className="menu-links">
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
                                    <i className="bi bi-windows me-2"></i>
                                    Productos
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </aside>
            )}
        </div>
    );
}