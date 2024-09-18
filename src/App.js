function App() {
  return (
    <div className='app dark'>
      <div className='container flex flex-col px-5 gap-5 lg:w-[38rem]'>
        <Header />
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

export default App;
