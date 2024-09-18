function App() {
  return (
    <div className='app light'>
      <div className='container flex flex-col px-5 gap-5 lg:w-[36rem]'>
        <Header />
        <Form />
      </div>
    </div>
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

export default App;
