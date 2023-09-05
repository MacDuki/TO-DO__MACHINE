import './TodoListPending.css';

function TodoListPending ({children}) {
    return (
    <ul className='listToDoLeftPending'>
        {children}   
    </ul>)
};

export default TodoListPending;