import Sidebar  from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function defaultLayout() {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-4">
                <Outlet />
            </div>
        </div>
    )
}

