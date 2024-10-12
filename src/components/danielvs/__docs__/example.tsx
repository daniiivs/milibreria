import React from "react";

// Importamos DanielVS y sus props
import DanielVS, { DanielVSProps } from "../danielvs";

// Creamos un componente Example al cual le pasaremos las props definidas
// en nuestro componente DanielVS. Luego renderizamos nuestro componente
// <DanielVS /> con esas props
function Example(props: DanielVSProps){
    return(
        <DanielVS
            defaultValue={props.defaultValue}
            max={props.max}
            size={props.size}
            color={props.color}
            precision={props.precision}
            readOnly={props.readOnly}
            disabled={props.disabled}
        />
    )
}
export default Example