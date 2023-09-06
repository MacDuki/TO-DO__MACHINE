import React from 'react';
import {MdOutlineTaskAlt} from 'react-icons/md'
import {AiOutlineReload} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'

function TodoItemRemoved (props) {
  const itemClassName = props.removed ? 'ItemToDoLeftRemoved' : 'ItemToDoLeft';
    return (
      <li className= {itemClassName}>
        <p>{props.text}</p>
        <div className='actionsContainerToDo'>
        <span onClick={props.handleClickCheck}><MdOutlineTaskAlt className=" actionIconsLeftClose"/></span>
        <span onClick={props.handleClickEliminate}><BsTrash className=" actionIconsLeftClose"/></span>
        <span onClick={props.handleClickDiscarded}><AiOutlineReload className=" actionIconsLeftCheck"/></span>        
        </div>
      </li>
      
    );
  }
  
  export {TodoItemRemoved}; 