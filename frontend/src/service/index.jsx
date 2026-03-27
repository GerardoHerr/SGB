import axios from 'axios';
import axiosInstance from "./axiosInstance.jsx";
import * as rs from '../config/routes.jsx'; 

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



