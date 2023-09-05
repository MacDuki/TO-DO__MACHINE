import React from 'react';

function TodoItemRemoved (props) {
  const itemClassName = props.completed ? 'ItemToDoLeftCompleted' : 'ItemToDoLeft';
    return (
      <li className= {itemClassName}>
        <p>{props.text}</p>
        <div className='actionsContainerToDo'>
        <span onClick={props.handleClickEliminiateChild}><ion-icon name="trash-outline" class=" actionIconsLeftClose"></ion-icon></span>
        <span onClick={props.handleClickCloseChild}><ion-icon name="reload-circle-outline" class=" actionIconsLeftCheck"></ion-icon></span>        
        </div>
      </li>
      
    );
  }

  export {TodoItemRemoved}; 