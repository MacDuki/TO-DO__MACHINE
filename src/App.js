import React from 'react';
import logo from './react512.webp';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import TodoList from './TodoList';
import TodoCounter from './TodoCounter';

const defaultTodos = [
{text: "Comprar Pan", completed: false},
{text: "Comprar Agua", completed: true},
{text: "Comprar Dulce de leche", completed: true},
{text: "Comprar Frutillas", completed: true},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TodoCounter completed={10} total={11}/> 
      <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem key= {todo.text} text={todo.text}/>
      ))}
      </TodoList>
      <CreateTodoButton/>
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
