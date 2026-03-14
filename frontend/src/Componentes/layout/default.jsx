import Sidebar  from "../Sidebar";

export default function defaultLayout() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-4">
                <h1>Contenido Principal</h1>
            </div>
        </div>
    )
}

