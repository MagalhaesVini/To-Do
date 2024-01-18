import { useState } from 'react';

import Todo from './components/todo';
import TodoForm from './components/TodoForm';

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      itsCompleted: false,
    },
    {
      id: 2,
      text: "treino de 30 minutos",
      category: "Pessoal",
      itsCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudar",
      itsCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {

    const newTodos = [
      ...todos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        itsCompleted: false,
      },
    ];
    
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>

  );
}

export default App
