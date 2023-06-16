import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState); //esta arrow funcion lo que hace es cambiar el estado, si era true, se pone false y viceversa

    }
    return(
    <button 
    className='CreateTodoButton'
    onClick={onClickButton}>
        +
    </button>
    );
}

export {CreateTodoButton}