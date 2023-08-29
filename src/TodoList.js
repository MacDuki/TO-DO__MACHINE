import './TodoList.css';

function TodoList ({children}) {
    return (
    <ul className='listToDoLeft'>
        {children}   
    </ul>)
};

export default TodoList;