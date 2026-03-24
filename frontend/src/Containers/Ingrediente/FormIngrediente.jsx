import { useEffect, useState } from "react";
import Input from "../../componentes/Input";
import MyButton from "../../componentes/MyButton/MyButton";
import Select from "../../componentes/Select/Select";

import { Box, Divider } from '@mui/material';
import { getUnidadIngrediente, guardarIngredientes } from "../../service";

function FormIngrediente({onClose, onSave}) {

  // 1. Estado
  const [nombre, setNombre] = useState("");
  const [descripcion,setDescripcion] = useState("");
  const [costo, setCosto] = useState("");
  const [unidad, setUnidad]=useState("");
  const [unidades, setUnidades]=useState([]);


  // Cargar unidad de medida
  useEffect(() => {
    async function cargarUnidades() {
      const data = await getUnidadIngrediente();
      setUnidades(data);
    }

      cargarUnidades();
    }, []);
    // 2. Función guardar

  async function guardar(){

      const ingrediente ={
          nombre,
          descripcion,
          costo,
          unidad
      }
      console.log("Registrado ingrediente", ingrediente)
      await guardarIngredientes(ingrediente);
      onSave();
      onClose();

  }

  return (

    <div>
      <div style={{
          backgroundColor: '#2c3033',
          padding: '16px',
          borderRadius: '10px 10px',  // Solo esquinas superiores redondeadas
          marginBottom: '16px'
        }}>
          <h3 style={{ 
            color: 'white', 
            margin: 0,
            fontSize: '1.2rem'
          }}>
            Agregar Ingrediente
        </h3>
      </div>

              <Divider sx={{ my: 1 }} />


      <Input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        
      />
        <Divider sx={{ my: 1 }} />

      {/* INPUT PRECIO */}
      <Input
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
        <Divider sx={{ my: 1 }} />


      
      {/* INPUT PRECIO */}
      <Input
        placeholder="Costo"
        value={costo}
        onChange={(e) => setCosto(e.target.value)}
      />
        <Divider sx={{ my: 1 }} />

      {/* UNIDAD DE MEDIDA */}

      <Select  
        value={unidad} 
        onChange={(e)=> setUnidad(e.target.value)}
        options={unidades}
        />
          <Divider sx={{ my: 1 }} />


      {/* BOTÓN */}

      <MyButton onClick={guardar}>
        Guardar
      </MyButton>
        <Divider sx={{ my: 1 }} />


    </div>

  );


  }


export default FormIngrediente;