import { createPortal } from 'react-dom';
import './Modal.css';

function Modal(props){   //Cambio en React 18 la forma de uso, se debe importar
    return(
        createPortal(
            <div className='ModalBackground'>
                {props.children}
            </div>,
            
            document.getElementById('modal') 
        )
    );
}
export {Modal}