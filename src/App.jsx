import { useState } from 'react';

import Todo from './components/todo';
import Search from './components/Search';
import Filter from './components/Filter';

import "./App.css";
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Relátorio Mensal",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Treino Cardiovascular de 30 minutos",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar Sistema de Login com Banco",
      category: "Estudar",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Ler 5 páginas do Livro",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Alongamento por 15 minutos",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {

    const newTodos = [
      ...todos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  };
  const sortTodos = (a, b) => {
    if (sort === "Asc" || sort === "Desc") {
      return sortAlfabetico(a, b);
    } else {
      return sortData(a, b);
    }
  };

  const sortAlfabetico = (a, b) => {
    return sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text);
  };

  const sortData = (a, b) => {
    if (a.id === b.id) {
      return sortAlfabetico(a, b);
    } else {
      return sort === "Old" ? a.id - b.id : b.id - a.id;
    }
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort(sortTodos)
          .map((todo) => (
            <Todo
              key={todo.id} todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App
