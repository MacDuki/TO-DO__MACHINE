import './TodoListCompleted.css'

function TodoListCompleted ({children}) {
    return (
    <ul className='listToDoLeftCompleted'>
        {children}   
    </ul>)
};

export  {TodoListCompleted};