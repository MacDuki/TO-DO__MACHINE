import React from 'react';
import './App.css';
import {TodoItemCompleted} from './TodoItemCompleted';
import { CreateTodoButton } from './CreateTodoButton';
import TodoListPending from './TodoListPending';
import TodoCounter from './TodoCounter';
import {TodoItemPending} from './TodoItemPending';
import { TodoSearch } from './TodoSearch';
import { TodoListCompleted } from './TodoListCompleted';


const defaultTodos = [
{text: "Comprar Pan", completed: false},
{text: "Comprar Agua", completed: false},
{text: "Comprar Dulce de leche", completed: false},
{text: "Comprar Frutillas", completed: false},
{text: "Comprar Anana", completed: true},
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length ;
  const totalTodos = todos.length;
  
  // Lógica para check y close TO-DO
  const handleClickCheckInParent = (text) => {
    const updateTodos = [...todos];
    const todoIndex = updateTodos.findIndex (
      (todo) => todo.text == text
    );
    updateTodos[todoIndex].completed=true;
    setTodos(updateTodos);
  };
  const handleClickCloseInParent = (text) => {
    const updateTodos = [...todos];
    const todoIndex = updateTodos.findIndex (
      (todo) => todo.text == text
    );
    updateTodos[todoIndex].completed=false;
    setTodos(updateTodos);
  };
  const allPendingTodos = defaultTodos.filter(todo => !todo.completed)
  const allCompletedTodos = defaultTodos.filter(todo => todo.completed)
  return (
    <section className="App">
      <div className="App-header">
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}
      /> 
      {/* <TodoSearch/> */}
      <CreateTodoButton/>
      <TodoListPending>
      {allPendingTodos.map(todo => (
       <TodoItemPending 
          key= {todo.text} 
          text={todo.text} 
          completed={todo.completed}
          handleClickCheckChild={ () => handleClickCheckInParent(todo.text)}
          handleClickCloseChild={ () => handleClickCloseInParent(todo.text)}
          /> ))}   
      </TodoListPending>
      <TodoListCompleted>
        {allCompletedTodos.map(todo => (
          <TodoItemCompleted
          key= {todo.text} 
          text={todo.text} 
          completed={todo.completed}
          handleClickCheckChild={ () => handleClickCheckInParent(todo.text)}
          handleClickCloseChild={ () => handleClickCloseInParent(todo.text)}
          />
        ))}
      </TodoListCompleted>
         
      </div>
    </section>
  );
}


export default App;
