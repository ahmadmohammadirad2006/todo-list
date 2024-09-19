const initialTodos = [
  {
    id: crypto.randomUUID(),
    name: 'Do coding challenge',
    completed: true,
  },
  {
    id: crypto.randomUUID(),
    name: 'Practice programming',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    name: 'Study English',
    completed: false,
  },
];

function App() {
  return (
    <main className='app dark'>
      <div className='container flex flex-col p-5 gap-5  lg:w-[36rem]'>
        <Header />
        <Form />
        <section className='flex flex-col rounded-md overflow-hidden'>
          <TodoList />
          <Actions />
        </section>
        <Footer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Todo</h1>
      <button>
        <img className='w-5 h-5' src='/images/icon-sun.svg' alt='Sun icon' />
      </button>
    </header>
  );
}

function Form() {
  return (
    <form>
      <div className='input-group'>
        <span className='circle'></span>
        <input placeholder='Create a new todo...' />
      </div>
    </form>
  );
}

function TodoList() {
  return (
    <ul className='todo-list'>
      {initialTodos.map((todo) => (
        <TodoItem completed={todo.completed} id={todo.id}>
          {todo.name}
        </TodoItem>
      ))}
    </ul>
  );
}

function TodoItem({ id, completed, children }) {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <input type='checkbox' value={completed} id={id} className='hidden' />
      <label className='circle' htmlFor={id}></label>
      {children}
    </li>
  );
}

function Actions() {
  return (
    <div className='actions'>
      <span>5 items left</span>
      <div className='filters'>
        <button className='active'>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
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
