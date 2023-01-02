import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter/Counter';
// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        {/* <Counter count={count} setCount={setCount} /> */}
    </div>
  );
}

export default App;
