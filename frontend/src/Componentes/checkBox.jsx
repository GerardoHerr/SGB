import * as React from 'react';
import { FormControlLabel, Checkbox, FormGroup } from '@mui/material';

function CheckBox ( {lista} ) {
    return (
        <FormGroup>
            {lista.map((tipo) => (
                <FormControlLabel
                    key={tipo.value}
                    control={<Checkbox 
                        value={tipo.value}
                        onChange={(e) => console.log(e.target.checked, tipo.value)}
                    
                    />}
                    label={tipo.label}
                />
            ))}
        
        </FormGroup>
    );
}

export default CheckBox;
