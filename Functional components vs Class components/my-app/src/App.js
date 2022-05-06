import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick() {
    console.log("Hola mundo");
  }

  function handleChange(event){
    console.log(event.target.value)
  }
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
        <br></br>
        <button onClick={handleClick}>Hola Mundo</button>
        <input type="text" onChange={handleChange}></input>
      </header>
      
    </div>
  );
}

export default App;
