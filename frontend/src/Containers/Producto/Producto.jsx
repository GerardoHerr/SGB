import React from 'react';
import  TablaProducto from '../../Componentes/TablaProducto';
import { Box, colors, Paper, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import ButtonAñadir from '../../Componentes/ButtonAñadir';
import { getProductos } from '../../service';
import { useEffect } from 'react';

function Producto() { 
    const [productos, setProductos] = React.useState([]);
    
    useEffect(() => {
        getProductos().then(data => {
            const datosRefomateados = data.map(producto => ({
                nombre: producto.nombre,
                precio: producto.precioProducto,
                unidad: producto.unidad,
                receta: producto.receta ?.id
            }));
            setProductos(datosRefomateados); 
        }).catch(error => {
            console.error('ERROR EN API:', error);
        });
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
                                <ButtonAñadir />
                            </Box>
                    </Paper>
               
        </div>
    );


}

export default Producto;

