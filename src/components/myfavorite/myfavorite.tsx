import {MouseEventHandler} from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Declaro la interface del componente.
export interface MyFavoriteProps {
    color: string; // Prop color de tipo string (color del botón)
    disabled?: boolean; // Prop disabled. Es opcional (?) y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; // Prop onClick. Es opcional (?) y responde al evento de picar el botón
}

// Defino mi componente MyFavorite y le digo que las props son las que defino arriba
function MyFavorite(props: MyFavoriteProps) {
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
            <FavoriteIcon/>
        </IconButton>
    )
}

export default MyFavorite