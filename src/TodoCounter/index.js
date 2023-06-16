import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';


function TodoCounter(){
    const {totalTodos, completedTodos} =React.useContext(TodoContext);
  
    return(
        <h2 className='TodoCounter'>Haz completado {completedTodos} de {totalTodos} TODOs</h2>
    );

}
export {TodoCounter}; //no lo exporto por default para obligarme a escribir exactamente el nombre que requiero y no cometer errores al importarlo