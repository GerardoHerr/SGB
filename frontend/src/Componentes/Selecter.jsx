import { FormControl ,InputLabel, NativeSelect } from '@mui/material';
import * as React from 'react';


function Selecter ( {lista, onChange, name} ) {
    return ( 
        <FormControl fullWidth >

            <InputLabel >
                
            </InputLabel>
            < NativeSelect name= {name} onChange={onChange}
                defaultValue={30}
                inputProps={{
                    id: 'uncontrolled-native',
                }}
            >
                <option value="">Seleccione...</option>
                {lista.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                        {tipo.label}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
}

export default Selecter;