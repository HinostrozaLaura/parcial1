import React from "react";
const DETALLEHELADO =({nombre,des,costo,imge})=>{
    return(
        <div className="Helados">
            <h3>Nombre del helado : {nombre}</h3>
            <img style ={{with:100 ,height:200 } }src={imge}></img>
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