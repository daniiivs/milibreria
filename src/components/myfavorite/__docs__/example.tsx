import React from "react";

// Importamos MyFavorite y sus props
import MyFavorite, { MyFavoriteProps } from "../myfavorite";

// Creamos un componente Example al cual le pasaremos las props definidas
// en nuestro componente MyFavorite. Luego renderizamos nuestro componente
// <MyFavorite /> con esas props
function Example(props: MyFavoriteProps){
    return(
        <MyFavorite
            color={props.color}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    )
}
export default Example