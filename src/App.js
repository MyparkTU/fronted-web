import logos from './logo.svg';
import './App.css';
import logoimage from '../asset/image/logoMypark.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logos} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <image src = {logoimage} width= "50px" height= "50px" z-index= "4.0"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
