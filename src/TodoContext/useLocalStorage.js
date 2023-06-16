import React from 'react';

function useLocalStorage(itemNAme, initialValues) {
    const [error,setError] =React.useState(false);
    const [loading,setLoading] =React.useState(true);
    
    const [item, setItem] = React.useState(initialValues); //custom HOOK propio, creado para esta funcion
    
    React.useEffect(()=>{
      setTimeout(()=>{
       try {
        const localStorageItem = localStorage.getItem(itemNAme); //traigo a una variable lo que hay en localStorage(memoria del navegador del usuario)
    
        let parsedItem;
        
        if (!localStorageItem) {//!localStorage=vacio
          localStorage.setItem(itemNAme, JSON.stringify(initialValues));// COMO LOS USUARIOS NUEVOS NO HAN CREADO AUN TODOS, CREAMOS UNO VACIO, en texto
          parsedItem = initialValues; //parte del valor inicial que se le de cuando se use, sin importar el tipo de variable
        } else {
          parsedItem = JSON.parse(localStorageItem); //convierte la informacio de texto de JSON a mi archivo original, en nuestro caso un arreglo
          
        }
  
        setItem(parsedItem); //va a ejecutar el useEffect, simulando un retardo de 1seg
        setLoading(false); //cambio el estado y simulo que ya cargo
       }catch(error){ //try/catch permite que no se crashee la aplicacion con el error sino trabajar en algo mas 
  setError(error);
       }
      }, 1000);
    })  
  
    
    
    const saveItem= (newItem) => { //esta funcion va a guardar la informacion en el localStorage
      try{
        const stringifyItem = JSON.stringify(newItem); //convertimos en string nuestros array
      localStorage.setItem(itemNAme, stringifyItem); // Estamos guardando en itenNAmen en stringifyitem, localstorage
      setItem(newItem); 
      }catch(error){
        setError(error)
      }
     };
  return {
    item,
    saveItem, //Esto es lo que va a retornar mi HOOK
    loading, //informacion de nuestro HOOK si esta cargando
    error,
  };
  
  }
  
  export {useLocalStorage}