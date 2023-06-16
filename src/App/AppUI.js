import React from 'react';
import { TodoCounter } from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoContext} from '../TodoContext';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';


function AppUI (){
    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        
    } = React.useContext(TodoContext); //usamos el TodoContext con las propiedades de value, informacion que va a pasar por los demas componentes hijos, nietos etc
    
    return(
        <> 
    <TodoCounter/>

    <TodoSearch/>

    <TodoList>
        {loading && <p>Estamos cargando no desesperes</p>} 
        {error && <p>Desesperate hubo un error</p>} 
        {(!loading && !searchedTodos.length) &&  <p>Crea tu primer ToDo</p>} 
        
      {searchedTodos.map(todo =>( //por cada todo va a renderizar un todoItem
      <TodoItem 
      key={todo.text}//lo necesitan las listas, con el valor exacto a usar en cada elemento
      text={todo.text}
      completed = {todo.completed}
      onComplete= {() => completeTodos(todo.text)}
      onDelete= {() =>deleteTodo(todo.text)}/>
      ))}

    </TodoList>
          
{!!openModal &&( //Esto pregunta si openModal existe y  es true, inicialmente esconde el modal
    <Modal>
    <TodoForm/>
    </Modal>    
)} 

    <CreateTodoButton
    setOpenModal={setOpenModal}
    />
    
    </>    
    );
}
export {AppUI};