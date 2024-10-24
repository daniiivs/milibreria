//DANIEL VIERA SANTANA
import Rating from '@mui/material/Rating';

// Declaro la interface del componente.
export interface DanielVSProps {
    defaultValue: number; // Prop defaultValue de tipo number (valor predeterminado)
    color: string; // Prop color de tipo string (color de los iconos)
    precision: 0.5 | 1; // Prop precision con sus posibles valores (precision a la hora de puntuar)
    max: number; // Prop max de tipo number (total de iconos a mostrar)
    readOnly?: boolean; // Prop readOnly opcional (?) de tipo boolean (solo lectura)
    disabled?: boolean; // Prop disabled. Es opcional (?) y es de tipo boolean
    size?: "small" | "medium" | "large"; // Prop size opcional (?) con sus posibles valores (tamaño del componente)
}

// Defino mi componente DanielVS y le digo que las props son las que defino arriba
function DanielVS(props: DanielVSProps) {
    // Paso el valor de las props a un objeto
    const {defaultValue, color, precision, max, readOnly, disabled, size} = props
    return (
        // Uso el IconButton de la librería MUI y lo personalizo con las props que pasan a mi componente
        <Rating
            defaultValue={defaultValue}
            precision={precision}
            max={max}
            readOnly={readOnly}
            disabled={disabled}
            size={size}
            sx={{
                color: color
            }}
        />
    )
}

export default DanielVS