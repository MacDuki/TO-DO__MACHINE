import './TodoItemPending.css'
function TodoItemPending (props) {
    const itemClassName = props.completed ? 'ItemToDoLeft completed' : 'ItemToDoLeftPending';
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

export {TodoItemPending}; 