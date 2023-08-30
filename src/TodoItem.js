import React from 'react';
import './TodoItem.css'

function TodoItem (props) {
  const itemClassName = props.completed ? 'ItemToDoLeft completed' : 'ItemToDoLeft';
    return (
      <li className= {itemClassName}>
        <p>{props.text}</p>
        <div className='actionsContainerToDo'>
        <span onClick={props.handleClickCheckChild}><ion-icon name="checkmark-circle-outline" class=" actionIconsLeftCheck"></ion-icon></span>
        <span onClick={props.handleClickCloseChild}><ion-icon name="close-circle-outline" class=" actionIconsLeftClose"></ion-icon></span>
        </div>
      </li>
      
    );
  }

  export  {TodoItem}; 