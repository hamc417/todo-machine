/*import './App.css';*/
import React from 'react';
import { AppUI } from './AppUI'
import {TodoProvider} from '../TodoContext'


function App() { /*solo una etiqueta por componente <></> es un fragmento, envia solo una*/

  return (//con props.children, todo lo que hay en todo provider se pasa a AppUI y a todo sus componentes e hijos
 <TodoProvider>
     <AppUI/>     
 </TodoProvider>
  );
}

export default App;
