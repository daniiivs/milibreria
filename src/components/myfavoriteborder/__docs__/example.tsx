import React from "react";

// Importamos MyFavoriteBorder y sus props
import MyFavoriteBorder, { MyFavoriteBorderProps } from "../myfavoriteborder";

// Creamos un componente Example al cual le pasaremos las props definidas
// en nuestro componente MyFavoriteBorder. Luego renderizamos nuestro componente
// <MyFavoriteBorder /> con esas props
function Example(props: MyFavoriteBorderProps){
    return(
        <MyFavoriteBorder
            color={props.color}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    )
}
export default Example