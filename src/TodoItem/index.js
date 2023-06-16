import React from "react";
import './TodoItem.css';

function TodoItem(props){

    
    return(//en la clase se pusieron comillas invertidas, dice que si en propiedad, props.complete es verdadero, añade la clase Icon-check--active
    //la funcion que esta dentro del llamado onclick, debe llamarse con un arrow function si tiene parametros, si no solo se envia el nombre de la funcion
        <li className="TodoItem"> 
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}>
                √ 
                </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}>x</span>
        </li>
    );
}

export {TodoItem}