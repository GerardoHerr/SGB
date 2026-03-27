import { useState } from "react";
import Input from "../../Componentes/Input";
import MyButton from "../../Componentes/MyButton";
import { Divider } from '@mui/material';

function FormIngrediente() {

  // 1. Estado
  const [nombre, setNombre] = useState("");
  const [descripcion,setDescripcion] = useState("");
  const [costo, setCosto] = useState("");


  // 2. Función guardar

function guardar(){
    const ingrediente ={
        nombre: nombre,
        descripcion: descripcion,
        costo: costo,
    }

}

  return (

    <div>

      <h3>Agregar Ingrediente</h3>

      {/* INPUT NOMBRE */}
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
        onChange={(e) => setCosto(e.target.value)}
      />
        <Divider sx={{ my: 1 }} />


      
      {/* INPUT PRECIO */}
      <Input
        placeholder="Costo"
        value={costo}
        onChange={(e) => setCosto(e.target.value)}
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