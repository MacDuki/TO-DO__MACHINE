import React from 'react';
import './App.css';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import TodoList from './TodoList';
import TodoCounter from './TodoCounter';
import { TodoSearch } from './TodoSearch';



const defaultTodos = [
{text: "Comprar Pan", completed: false},
{text: "Comprar Agua", completed: false},
{text: "Comprar Dulce de leche", completed: true},
{text: "Comprar Frutillas", completed: true},
{text: "Comprar Anana", completed: true},
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length ;
  const totalTodos = todos.length;

  // Lógica para check y close TO-DO
  const [clickedCheck, setClickedCheck] = React.useState(false);
  const [clickedClose, setClickedClose] = React.useState(false);
  
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

  return (
    <section className="App">
      <div className="App-header">
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}
      /> 
      {/* <TodoSearch/> */}
      <CreateTodoButton/>
      <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem 
        key= {todo.text} 
        text={todo.text} 
        completed={todo.completed}
        handleClickCheckChild={ () => handleClickCheckInParent(todo.text)}
        handleClickCloseChild={ () => handleClickCloseInParent(todo.text)}
        />
      ))}
      </TodoList>
      
      </div>
    </section>
  );
}


export default App;
