import React from 'react';
import  TablaProducto from '../../Componentes/TablaProducto';
import { Box, colors, Paper, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import MyButton from '../../Componentes/MyButton';
import { getProductos, getRecetas } from '../../service';
import { useEffect } from 'react';
import ModalProducto from '../../Componentes/ModalProducto';
import { Modal } from 'bootstrap';
import { guardarProducto } from '../../service';


function Producto() { 
    const [productos, setProductos] = React.useState([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [recetas, setRecetas] = React.useState([]);
    
    const handleSave = async (form) => {
        const NuevoProducto = {
            nombre: form.nombre,   
            precioProducto: Number(form.precio),
            unidad: form.unidad ? form.unidad.toLowerCase() : null,
            receta: form.receta ? { id: Number(form.receta) } : null
        };

        console.log('Nuevo Producto a guardar:', NuevoProducto);

        try {
            const savedProducto = await guardarProducto(NuevoProducto);
            console.log('Producto guardado con éxito:', savedProducto);
            setIsModalOpen(false);
            const updatedProductos = await getProductos();
            setProductos(transformarProducto(updatedProductos));
        } catch (error) {
            console.error('Error al guardar el producto:', error);
        }
    }

    const transformarProducto = (productos) => {
        return productos.map(producto => ({
            nombre: producto.nombre,
            precio: producto.precioProducto,
            unidad: producto.unidad,
            receta: producto.receta ?.id
        }));
    }

    
    useEffect(() => {
        getProductos().then(data => {
            setProductos(transformarProducto(data)); 
        }).catch(error => {
            console.error('ERROR EN API:', error);
        });
    }, []);

    useEffect(() => {
        getRecetas().then(data => {
            setRecetas(data);  
        }).catch(error => {
            console.error('ERROR EN API:', error);
        }
        );
    }, []);

    return (
        <div>
            <h1>Gestión de Producto</h1>
                
                    <Paper 
                        sx = {{
                            padding: 2,
                            width: '188%',
                            overflow: 'hidden' 
                        }}
                    >   
                        <Box sx={{ p: 2, backgroundColor: '#f5f5f5', }}>
                            <Typography variant="h6">
                                Lista de Productos
                            </Typography>
                        </Box>
                            <Divider sx={{ my: 1 }} />
                            <TablaProducto rows={productos}/>
                            <Divider sx={{ my: 1 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <MyButton children={"Agregar Producto"} 
                                    onClick = {() => setIsModalOpen(true)}
                                />
                                <ModalProducto isOpen={isModalOpen} 
                                    Onclose={() => setIsModalOpen(false)}
                                    recetas = {recetas}
                                    onSave = {handleSave}
                                />  

                            </Box>
                    </Paper>
               
        </div>
    );


}

export default Producto;

