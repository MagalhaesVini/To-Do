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

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm />
    </div>

  )
}

export default App
