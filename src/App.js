import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [mode, setMode] = useState('light');
  const [filter, setFilter] = useState('all');

  function handleToggleMode() {
    setMode((cur) => (cur === 'light' ? 'dark' : 'light'));
  }

  function handleAddTodo(todo) {
    setTodos((cur) => [...cur, todo]);
  }

  function handleToggleComplete(id) {
    setTodos((cur) =>
      cur.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos((cur) => cur.filter((todo) => todo.id !== id));
  }

  function handleDeleteCompleted() {
    setTodos((cur) => cur.filter((todo) => !todo.completed));
  }

  function handleChangeFilter(filter) {
    setFilter(filter);
  }

  return (
    <main className={`app ${mode}`}>
      <div className='container flex flex-col p-5 gap-5  lg:w-[36rem]'>
        <Header mode={mode} onToggleMode={handleToggleMode} />
        <Form onAddTodo={handleAddTodo} />
        <section className='flex flex-col rounded-md overflow-hidden'>
          <TodoList
            todos={todos}
            filter={filter}
            onToggleComplete={handleToggleComplete}
            onDeleteTodo={handleDeleteTodo}
          />
          <Actions
            todos={todos}
            onDeleteCompleted={handleDeleteCompleted}
            onChangeFilter={handleChangeFilter}
            filter={filter}
          />
        </section>
        <Footer />
      </div>
    </main>
  );
}
function Header({ mode, onToggleMode }) {
  return (
    <header className='header'>
      <h1>Todo</h1>
      <button onClick={onToggleMode}>
        <img
          className='w-5 h-5'
          src={`/images/icon-${mode === 'light' ? 'moon' : 'sun'}.svg`}
          alt={`${mode === 'light' ? 'Moon' : 'Sun'} icon`}
        />
      </button>
    </header>
  );
}
function Form({ onAddTodo }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newTodo = {
      id: crypto.randomUUID(),
      name,
      completed: false,
    };
    onAddTodo(newTodo);
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group'>
        <button className='circle'></button>
        <input
          placeholder='Create a new todo...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </form>
  );
}
function TodoList({ todos, onToggleComplete, onDeleteTodo, filter }) {
  let todosToDisplay;

  if (filter === 'all') {
    todosToDisplay = todos;
  }
  if (filter === 'active') {
    todosToDisplay = todos.filter((todo) => !todo.completed);
  }
  if (filter === 'completed') {
    todosToDisplay = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className='todo-list'>
      {todosToDisplay.map((todo) => (
        <TodoItem
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
          key={todo.id}
        />
      ))}
    </ul>
  );
}
function TodoItem({ onToggleComplete, onDeleteTodo, todo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type='checkbox'
        value={todo.completed}
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        id={todo.id}
        className='hidden'
      />
      <label className='circle' htmlFor={todo.id}></label>
      <p>{todo.name}</p>
      <button className='delete-btn' onClick={() => onDeleteTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}
function Actions({ todos, onDeleteCompleted, onChangeFilter, filter }) {
  const leftTodos = todos.filter((todo) => !todo.completed);
  return (
    <div className='actions'>
      <span>{leftTodos.length} items left</span>
      <div className='filters'>
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => onChangeFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => onChangeFilter('active')}
        >
          Active
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => onChangeFilter('completed')}
        >
          Completed
        </button>
      </div>
      <button onClick={onDeleteCompleted}>Clear Completed</button>
    </div>
  );
}
function Footer() {
  return (
    <footer className='text-center text-base text-light-gray'>
      Drag and drop to record list
    </footer>
  );
}

export default App;
