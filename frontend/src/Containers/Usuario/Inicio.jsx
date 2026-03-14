import defaultLayout  from '../../Componentes/layout/default';

export default function Inicio() {
    return (
        <div>
            {defaultLayout()}
            <h1>Bienvenido al Sistema de Gestión de Bibliotecas</h1>
        </div>
    )
}
