
import React from "react";
import DETALLEHELADO from "./detallehelados";

const LISTADODEHELADOS =()=>(
<div >

    <div>
       <DETALLEHELADO  nombre="Chocolate con almendras" des="Para mí el helado de chocolate con almendras tendría que estar entre los primeros lugares de la lista. Pero por ahora me  conformo con saber que está entre los 13 más populares del mundo." costo={25}></DETALLEHELADO>
       <DETALLEHELADO nombre=" Menta" des="¿Qué decir del helado de menta? Personalmente no me gusta, pero creo que es uno de esos sabores que los amas o los odias; no existe el punto medio." costo={15}></DETALLEHELADO>
       <DETALLEHELADO nombre="Marmolado de vainilla con salsa de chocolate" des="Quizás uno de los favoritos de los niños pequeños y uno de esos que nos trae recuerdos de la infancia, el helado marmolado de vainilla con salsa de chocolate no podía faltar en esta lista." costo={21}></DETALLEHELADO>
       <DETALLEHELADO nombre="Crema con galletas Oreo" des="Si el helado de crema es delicioso, solo puede mejorar cuando le agregas galletas Oreo, y así es como surge el delicioso helado de crema con galletas Oreo." costo={30}></DETALLEHELADO>
       <DETALLEHELADO nombre=" Chocolate amargo" des="Conocido también como chocolate holandés, o chocolate fuerte, o doble chocolate, el helado de chocolate amargo es un clásico de los amantes del chocolate." costo={18}></DETALLEHELADO>
       <DETALLEHELADO nombre="Crema con chips de chocolate" des="Otro de los sabores clásicos que no podía faltar en esta lista es el helado de crema con chips de chocolate. ¡Favorito de niños y adultos por igual!" costo={26}></DETALLEHELADO>
       <DETALLEHELADO nombre="Dulce de leche" des="El helado de dulce de leche es un clásico de América del Sur y se extiende como un sabor exótico en el resto del mundo. ¿Su sabor? Simplemente irresistible. " costo={16}></DETALLEHELADO>
       
      
    </div>
    </div>
);
export default LISTADODEHELADOS;