import './TodoList.css';

function TodoList ({children}) {
    return (
    <ul>
        {children}   
    </ul>)
};

export default TodoList;