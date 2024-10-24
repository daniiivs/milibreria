//DANIEL VIERA SANTANA
import {MouseEventHandler} from 'react';
import Button from '@mui/material/Button';

// Declaro la interface del componente.
export interface MyButtonProps {
    text: string; // Prop text de tipo string (texto del botón)
    txtColor: string; // Prop txtColor de tipo string (color del texto)
    bgColor: string; // Prop bgColor de tipo string (color del botón)
    borderColor: string; // Prop borderColor de tipo string (color del borde del botón)
    border: string; // Prop border de tipo string (ancho del borde)
    size: "small" | "medium" | "large"; // Prop size con sus posibles valores (tamaño del botón)
    hoverTxtColor: string; // Prop hoverTxtColor de tipo string (color del texto del botón al hacer hover)
    hoverBgColor: string; // Prop hoverBgColor de tipo string (color del botón al ahcer hover)
    disabled?: boolean; // Prop disabled. Es opcional (?) y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; // Prop onClick. Es opcional (?) y responde al evento de picar el botón
}

// Defino mi componente MyButton y le digo que las props son las que defino arriba
function MyButton(props: MyButtonProps) {
    // Paso el valor de las props a un objeto
    const {bgColor, text, txtColor, disabled, onClick, size, borderColor, border, hoverTxtColor, hoverBgColor} = props
    return (
        // Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente
        <Button
            type='button'
            onClick={onClick}
            disabled={disabled}
            size={size}
            sx={{
                backgroundColor: bgColor,
                color: txtColor,
                border: `${border}px solid ${borderColor}`,
                ':hover': {
                    backgroundColor: hoverBgColor,
                    color: hoverTxtColor
                }
            }}
        >
            {text}
        </Button>
    )
}

export default MyButton