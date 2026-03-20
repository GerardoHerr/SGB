import FormIngrediente from "./FormIngrediente";
import { useState } from "react";
import { Modal, Box } from "@mui/material";
import MyButton from "../../componentes/MyButton";

function IngredientePage(){

        const [open, setOpen] = useState(false);

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
    return(
        <div>
            <MyButton onClick={handleOpen}>
                Agregar Ingrediente
            </MyButton>

            <Modal open={open} onClose={handleClose}>

                <Box sx={{
                width: 400,
                backgroundColor: "white",
                padding: 3,
                margin: "100px auto"
                }}>

                <h2>Agregar Ingrediente</h2>

                <FormIngrediente />

                <MyButton onClick={handleClose}>
                    Cancelar
                </MyButton>

                </Box>

            </Modal>
        </div>
    );
}
export default IngredientePage;

/*Titulo
  Formulario
  Tabla */