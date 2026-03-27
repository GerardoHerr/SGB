import { use, useState } from 'react';
import { Modal, Box, Typography, TextField, FormControl } from '@mui/material';
import { useEffect } from 'react';
import { Divider } from '@mui/material';
import Selecter from './Selecter';
import Input from './Input';
import MyButton from './MyButton/MyButton';

function reformatearRecetas(recetas) {
    return recetas.map(receta => ({     
        label: receta.nombre,   
        value: receta.id
    }));
}

function ModalProducto( {isOpen, Onclose, recetas, onSave} ) {
    const [nuevaRecetas, setNuevaRecetas] = useState([]);

    const [form, setForm] = useState({
        nombre: '',
        precio: '',
        unidad: '',
        receta: ''
    });
    
    useEffect(() => {
        if (recetas) {
            const recetasReformateadas = reformatearRecetas(recetas);
            setNuevaRecetas(recetasReformateadas);
        }
    }, [recetas]);

    const tiposUnidad = [
        { label: 'Kilogramo', value: 'Kilo' },
        { label: 'Litro', value: 'litro' },
        { label: 'Mililitro', value: 'militro' },
        { label: 'Libra', value: 'libra' },
        { label: 'Gramo', value: 'gramo' }, 
        { label: 'Arroba', value: 'arroba' },
        { label: 'Pieza', value: 'pieza' },
        { label: 'Quintal', value: 'quintal' }

    ]

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSave = () => {
        console.log(form);
        onSave(form);
    }

    return (
            <Modal open={isOpen} onClose={Onclose}> 
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Agregar Producto
                    </Typography>

                    <Typography>
                        Nombre Producto
                    </Typography>
                    
                    
                    <Input
                        fullWidth
                        placeholder='Ingrese el nombre del producto'
                        variant="outlined"
                        size='small'
                        onChange={handleInputChange}
                        name='nombre'
                    />
                    <Divider sx={{ my: 1 }} />
                    <Typography>
                        Precio del Producto
                    </Typography>
                    
                    
                    <Input
                        fullWidth
                        placeholder='Ingrese el precio del producto'
                        variant="outlined"
                        size='small'
                        type = 'number'
                        onChange={handleInputChange}
                        name='precio'
                    />
                    <Divider sx={{ my: 1 }} />
                    
                    
                    <Typography sx={{mb: -2}}> 
                        Unidad de Medida
                    </Typography>
                
                    <Selecter lista={tiposUnidad} onChange={handleInputChange} name='unidad'/>
                   

                    <Divider sx={{ my: 1 }} />
                    

                    <Typography sx={{mb: -2}}>
                        Receta                        
                    </Typography>


                    <Selecter lista={nuevaRecetas} onChange={handleInputChange} name='receta'/>


                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
                        <MyButton onClick={handleSave}>
                            Guardar 
                        </MyButton>

                        <MyButton onClick={Onclose}>
                            Cancelar
                        </MyButton>
                    </Box>

                </Box>


                    
            </Modal>


    );
}

export default ModalProducto;