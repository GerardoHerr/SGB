import React from 'react';
import FormIngrediente from "./FormIngrediente";

import { useEffect,useState} from "react";
import { Box, colors, Paper, Typography, Modal, Divider } from '@mui/material';
import MyButton from "../../componentes/MyButton/MyButton";
import { getIngredientes, guardarIngredientes } from "../../service";
import  TablaProducto from '../../Componentes/TablaProducto';


function IngredientePage(){
        const [ingredientes, setIngredientes] = React.useState([]);
        
        useEffect(()=>{
            cargarIngredientes();
        },[]);

        const cargarIngredientes = () => {
            getIngredientes()
            .then(data => {
                const datosRefomateados = data.map(ingrediente => ({
                    nombre: ingrediente.nombre,
                    descripcion: ingrediente.descripcion,
                    costo: ingrediente.costo,
                    unidad: ingrediente.unidad
                }));
                setIngredientes(datosRefomateados);
            })
            .catch(error => {
                console.error('ERROR EN API:', error);
            });
        };
        



        const [open, setOpen] = useState(false);

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    return(
        <div>
            <h1>Gestión de Ingredientes</h1>
            <MyButton onClick={handleOpen}>
                Agregar Ingrediente
            </MyButton>

            <Modal open={open} onClose={handleClose}>
                
                <Box sx={{
                width: 350,
                backgroundColor: "white",
                padding: 3,
                margin: "120px auto",
                border: '3px solid gray',
                borderRadius: '20px',  // o '2rem', '999px' 

                }}>

                <FormIngrediente onClose={handleClose} onSave={cargarIngredientes}/>

                <MyButton onClick={handleClose}>
                    Cancelar
                </MyButton>

                </Box>

            </Modal>
             <Paper 
                        sx = {{
                            padding: 2,
                            width: '188%',
                            overflow: 'hidden' 
                        }}
                    >   
                        <Box sx={{ p: 2, backgroundColor: '#f5f5f5', }}>
                            <Typography variant="h6">
                                Lista de Ingredientes
                            </Typography>
                        </Box>
                            <Divider sx={{ my: 1 }} />
                            <TablaProducto rows={ingredientes}/>
                            <Divider sx={{ my: 1 }} />
                    </Paper>
        </div>
    );
}
export default IngredientePage;

/*Titulo
  Formulario
  Tabla */