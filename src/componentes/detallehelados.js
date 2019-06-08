import React from "react";
const DETALLEHELADO =({nombre,des,costo})=>{
    return(
        <div className="Helados">
            <h3>Nombre del helado : {nombre}</h3>
            <hr/>
            <p className="Comentarios">Comentarios : {des}</p>
            <hr/>
            <span>Costo del Helado {costo} soles</span>
            <br/>
            <hr/>

        </div>
    )
}
 export default DETALLEHELADO;