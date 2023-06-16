import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    
const {
    item: todos,
    saveItem: saveTodos, //Esto es lo que va a retornar mi HOOK
    loading, //innformacion del nuestro HOOK si esta cargando
    error,
  } = useLocalStorage('TODOS_V1', []); //en este caso el valor inicial crea todos como TODOS_V1 y un array vacio
  
  const [searchValue, setSearchValue] = React.useState('');
    
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length; //!!todo.completed significa es falso que mi variable sea falsa, doble negacion
    const totalTodos = todos.length;
  
    let searchedTodos = [];
  
    if (!searchValue.length >= 1) {//viene del useState
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
      })
    }
  
    const addTodo = (text) => {
      const newTodos = [...todos]; 
      newTodos.push({
        completed: false,
        text,
      });
      saveTodos(newTodos);
    };

    const completeTodos = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);// examinando cual todo tiene el mismo texto
      /*todos[todoIndex = {
        text: todos [todoIndex].text,
        completed: true
      }]*/
      todos[todoIndex].completed = true//recorre todo el objeto y a los completados les envia true, es igual a la linea anterior
      const newTodos = [...todos]; //copia de los todos en un nuevo array
      saveTodos(newTodos);
    }
  
    //funcion para eliminar los todos COMPLETADOS
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
  
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);//funcion para decir donde cortar del array newTodos, todoIndex es la posicion inicial, y el segundo parametro es cuantas posiciones a partir de ahi
      saveTodos(newTodos);
    }
  
    /*console.log('Antes use effect')
    React.useEffect(()=>{ // se ejecuta despues de que react termine todos los calculos y antes del render
      
      console.log('use effect')
  
    }, [totalTodos]) //El segundo elemento es un array, no es obligatorio, permite definir cuando debemos ejecutarlo,
          //si se pone vacio, se ejecuta solo una vez cuando se ejecuta por primera vez el código
          // En este caso se va a ejecutar solo cuando cambie la cuenta de totalTodos
    console.log('Despues de use effect')*/
  
  
return(
//puente para enviar informacion para todos los componentes
//props.children, cualquier elemento hijo lo puede consumir(usar)
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      addTodo,
      searchedTodos,
      completeTodos,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>  
        {props.children} 
    </TodoContext.Provider>
)

}

export {TodoContext, TodoProvider}