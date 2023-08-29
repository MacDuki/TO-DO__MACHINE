import React from 'react';
import './TodoItem.css'

function TodoItem (props) {
    return (
      <li className='ItemToDoLeft'>
        <p>{props.text}</p>
        <div className='actionsContainerToDo'>
        <span><ion-icon name="checkmark-circle-outline" class=" actionIconsLeftCheck"></ion-icon></span>
        <span><ion-icon name="close-circle-outline" class=" actionIconsLeftClose"></ion-icon></span>
        </div>
      </li>
      
    );
  }


  export  {TodoItem}; 