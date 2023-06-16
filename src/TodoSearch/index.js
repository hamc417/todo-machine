import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';
//Recordar {} dentro de ()de la funcnion
 function TodoSearch(){ //valores se estan enviando desde App.js
     //state y useState puede ser cualquier nombre usando use en el segundo, puede ser una plabra relacionada a la funcion, en el ultimo paretisi se ingresa el valor inicial de la variable, en este caso vacio

    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange= (event)=>{
        console.log(event.target.value);//se toma el target.value del evento
        setSearchValue(event.target.value);//aca vamos a cambiar el valor 
    }
    return(
        <input 
        className='TodoSearch'
        placeholder='Cebolla'
        value={searchValue}//aca esta guardado el valor
        onChange={onSearchValueChange}//escucha los cambios en el input en este caso texto
        
        />
        );
}
export {TodoSearch};