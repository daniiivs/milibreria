import React from "react";

// Importamos MyButton y sus props
import MyButton, { MyButtonProps } from "../mybutton";

// Creamos un componente Example al cual le pasaremos las props definidas
// en nuestro componente MyButton. Luego renderizamos nuestro componente
// <MyButton /> con esas props
function Example(props: MyButtonProps){
    return(
        <MyButton
            text={props.text}
            txtColor={props.txtColor}
            bgColor={props.bgColor}
            borderColor={props.borderColor}
            border={props.border}
            size={props.size}
            hoverBgColor={props.hoverBgColor}
            hoverTxtColor={props.hoverTxtColor}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    )
}
export default Example