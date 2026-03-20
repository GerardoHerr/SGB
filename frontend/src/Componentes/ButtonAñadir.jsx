import * as React from 'react';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function ButtonAñadir() {
    return (
        <Stack direction="row" spacing= {2} width={'100%'}> 
            <Button variant ="contained" color= "success" sx={
                {
                    width: '20%'
                }
                
            }> Añadir </Button>
                
        </Stack>
    )
}