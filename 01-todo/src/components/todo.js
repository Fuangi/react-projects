import {useState} from 'react';
import Modal from './Modal'
import Backdrop from './backdrop';
//...this allows us to use useState from react library to change the state of the page

function Todo(props){
    //then call it in the main component and state the initial state. it returns an array with 2 elements as stored below. then the first is assigned and wh

    const [modalIsOpen, setModalisOpen] = useState(false) 
// in the abovve, the first is a value and the second is a function. the first isset to false and the function is null

// the funtion name(component) should be in UC and can be anything. To accept parameters to be passed when the componenet is used, use props as above but u can name it anyhow u want. it'll be an object with values as key-value pairs
// handling events here works like in js event listener respecting the below (we're using a nested func here but u can use anonymous or arrow funcs in the btn attr)
function deleteHandler(){
        // using a component to do that Modal component as it is good practice
        setModalisOpen(true)
    }
    function closeHandler(){
        setModalisOpen(false);
    }

    return(
        <div className = 'card'> 
        {/* class names here are added with the className attribute as it is correspondent in js and not class attribute*/}
         <h2>{props.text}</h2>
        {/* using the props here bby accessing the value of the key like in js objs. and sa we used text... but another attr can be used
        To use js in here, write it between {} */}

         <div className = 'actions'>

         <button className='btn' onClick={deleteHandler}>Delete</button>
         {/* to handle a click(listen to an event),  we add an extra attr on the  (onClick*/}
         </div>
         {/* using teneray operator t check if the modal is op/en and if it is show, else set it to null(close) */}
         { modalIsOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler} />}
         { modalIsOpen && <Backdrop onCancel ={ closeHandler}/>}
        </div>
    );
}

export default Todo; 
// to make it available outside this file to be imported and rendered