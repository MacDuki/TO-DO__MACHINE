import React from 'react';
import './App.css';
import {TodoItemCompleted} from './TodoItemCompleted';
import { CreateTodoButton } from './CreateTodoButton';
import TodoListPending from './TodoListPending';
import TodoCounter from './TodoCounter';
import {TodoItemPending} from './TodoItemPending';
import { TodoSearch } from './TodoSearch';
import { TodoListCompleted } from './TodoListCompleted';
import { TodoListRemoved } from './TodoListRemoved';
import { TodoItemRemoved } from './TodoItemRemoved';


const defaultTodos = [
{text: "Comprar Pan", completed: false, removed: false},
{text: "Comprar Agua", completed: false, removed: false},
{text: "Comprar Dulce de leche", completed: false, removed: false},
{text: "Comprar Frutillas", completed: true, removed: false},
{text: "Comprar Anana", completed: false, removed: true},
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length ;
  const totalTodos = todos.filter(todo=> !todo.removed).length;
  
  // Lógica para check y close TO-DO

  const allPendingTodos = defaultTodos.filter(todo => !todo.completed && !todo.removed);
  const allCompletedTodos = defaultTodos.filter(todo => todo.completed && !todo.removed);
  const allRemovedTodos = defaultTodos.filter(todo => todo.removed);
  const handleClickCheckInParent = (text) => {
    const updateTodos = [...todos];
    const todoIndex = updateTodos.findIndex (
      (todo) => todo.text == text
    );
    updateTodos[todoIndex].completed =true;
    updateTodos[todoIndex].removed =false;
    setTodos(updateTodos);
  };

  const handleClickDiscardedInParent = (text) => {
    const updateTodos = [...todos];
    const todoIndex = updateTodos.findIndex (
      (todo) => todo.text == text
    );
    updateTodos[todoIndex].completed=false;
    updateTodos[todoIndex].removed = false;
    setTodos(updateTodos);
  };

  const handleClickEliminateInParent = (text) => {
    console.log('Escucho evento eliminar')
    const updateTodos = [...todos];
    const todoIndex = updateTodos.findIndex (
      (todo) => todo.text == text
    );
    updateTodos[todoIndex].completed=false;
    updateTodos[todoIndex].removed = true;
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
      <TodoListPending>
      {allPendingTodos.map(todo => (
       <TodoItemPending 
          key= {todo.text} 
          text={todo.text} 
          completed={todo.completed}
          handleClickCheckChild={ () => handleClickCheckInParent(todo.text)}
          handleClickCloseChild={ () => handleClickDiscardedInParent(todo.text)}
          /> ))}   
      </TodoListPending>
      <TodoListCompleted>
        {allCompletedTodos.map(todo => (
          <TodoItemCompleted
          removed = {todo.removed}
          key= {todo.text} 
          text={todo.text} 
          completed={todo.completed}
          handleClickEliminiateChild={ () => handleClickEliminateInParent(todo.text)}
          handleClickCloseChild={ () => handleClickDiscardedInParent(todo.text)}
          />
        ))}
      </TodoListCompleted>
      <TodoListRemoved>
      {allRemovedTodos.map(todo => (
       <TodoItemPending 
          key= {todo.text} 
          text={todo.text} 
          completed={todo.completed}
          handleClickCheckChild={ () => handleClickCheckInParent(todo.text)}
          handleClickCloseChild={ () => handleClickDiscardedInParent(todo.text)}
          /> ))}   
      </TodoListRemoved>
      
         
      </div>
    </section>
  );
}


export default App;
