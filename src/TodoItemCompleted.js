import React from 'react';
import './TodoItemCompleted.css'

function TodoItemCompleted (props) {
  const itemClassName = props.completed ? 'ItemToDoLeftCompleted' : 'ItemToDoLeft';
    return (
      <li className= {itemClassName}>
        <p>{props.text}</p>
        <div className='actionsContainerToDo'>
        <span onClick={props.handleClickClose}><ion-icon name="reload-circle-outline" class=" actionIconsLeftCheck"></ion-icon></span>        
        <span onClick={props.handleClickRemoved}><ion-icon name="close-circle-outline" class=" actionIconsLeftClose"></ion-icon></span>
        </div>
      </li>
      
    );
  }

  export {TodoItemCompleted}; 