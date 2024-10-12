import {MouseEventHandler} from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Declaro la interface del componente.
export interface MyFavoriteBorderProps {
    color: string; // Prop color de tipo string (color del botón)
    disabled?: boolean; // Prop disabled. Es opcional (?) y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; // Prop onClick. Es opcional (?) y responde al evento de picar el botón
}

// Defino mi componente MyFavoriteBorder y le digo que las props son las que defino arriba
function MyFavoriteBorder(props: MyFavoriteBorderProps) {
    // Paso el valor de las props a un objeto
    const {color, disabled, onClick} = props
    return (
        // Uso el IconButton de la librería MUI y lo personalizo con las props que pasan a mi componente
        <IconButton
            onClick={onClick}
            disabled={disabled}
            sx={{
                color: color
            }}
        >
            <FavoriteBorderIcon/>
        </IconButton>
    )
}

export default MyFavoriteBorder