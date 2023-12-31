import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoForm.css';
function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    
                const onChange = (event)=>{
                    setNewTodoValue(event.target.value);
                 }
                const onCancel = ()=>{
                    setOpenModal(false);
                }
                const onSubmit = (event)=>{
                    event.preventDefault();
                    addTodo(newTodoValue);
                    setOpenModal(false);
                }

    return(//para form onSubmit, para textare o input es onChange, para boton es onclick 
        <form onSubmit={onSubmit}>  
            <label>Escribe tu nuevo TODO</label>
            <textarea
            value = {newTodoValue}
            onChange={onChange}
            placeholder='crea tu ToDo'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                type="button"
                className='TodoForm-button TodoForm-button--cancel'
                onClick={onCancel}>
                    Cancelar
                </button>
                <button
                className='TodoForm-button TodoForm-button--add'
                type="submit"

                >
                    Añadir
                </button>
            </div>

        </form>
    )
}

export {TodoForm}