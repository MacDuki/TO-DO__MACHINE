import React from 'react';
import './App.css';
import {TodoItem} from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import TodoList from './TodoList';
import TodoCounter from './TodoCounter';
import { TodoSearch } from './TodoSearch';

const defaultTodos = [
{text: "Comprar Pan", completed: false},
{text: "Comprar Agua", completed: true},
{text: "Comprar Dulce de leche", completed: true},
{text: "Comprar Frutillas", completed: true},
{text: "Comprar Anana", completed: true},
{text: "Comprar Pan", completed: false},
{text: "Comprar Agua", completed: true},
{text: "Comprar Dulce de leche", completed: true},
{text: "Comprar Frutillas", completed: true},
{text: "Comprar Anana", completed: true},
{text: "Comprar Pan", completed: false},
{text: "Comprar Agua", completed: true},
{text: "Comprar Dulce de leche", completed: true},
{text: "Comprar Frutillas", completed: true},
{text: "Comprar Anana", completed: true},
{text: "Comprar Pan", completed: false},
{text: "Comprar Agua", completed: true},
{text: "Comprar Dulce de leche", completed: true},
{text: "Comprar Frutillas", completed: true},
{text: "Comprar Anana", completed: true},
];

function App() {
  return (
    <section className="App">
      <div className="App-header">
      <TodoCounter completed={10} total={11}/> 
      {/* <TodoSearch/> */}
      <CreateTodoButton/>
      <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem key= {todo.text} text={todo.text}/>
      ))}
      </TodoList>
      
      </div>
    </section>
  );
}


export default App;
