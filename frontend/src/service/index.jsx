import axios from 'axios';
import axiosInstance from "./axiosInstance.jsx";
import * as rs from '../config/routes.jsx'; 

//Servicios de Ingredientes
export const getIngredientes = async () => {
    try {
        const response = await axiosInstance.get(rs.INGREDIENTES);
        return response.data;
    } catch (error) {
        console.error('Error fetching ingredientes:', error);
        throw error;
    }
}

export const guardarIngredientes = async (ingrediente) => {
    try {
        const response = await axiosInstance.post(rs.INGREDIENTES, ingrediente);
        return response.data;
    } catch (error) {
        console.error('Error saving ingrediente:', error);
        throw error;
    }
}

export const getUnidadIngrediente = async () =>{
    //const response = await api.get("/ingredientes/unidad");
    const response = await axiosInstance.get(rs.UNIDAD);

    return response.data;
}


//Servicios de Productos
export const getProductos = async () => {
    try {
        const response = await axiosInstance.get(rs.PRODUCTOS);
        return response.data;
    } catch (error) {
        console.error('Error fetching productos:', error);
        throw error;
    }
}

export const guardarProducto = async (producto) => {
    try {
        const response = await axiosInstance.post(rs.PRODUCTOS, producto);
        return response.data;
    } catch (error) {
        console.error('Error saving producto:', error);
        throw error;
    }
}

export const getRecetas = async () => {
    try {
        const response = await axiosInstance.get(rs.RECETAS);
        return response.data;
    } catch (error) {
        console.error('Error fetching recetas:', error);
        throw error;
    }
}



