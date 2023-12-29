import logo from './logo.svg';
import './App.css';

function App() {  
  const randomName = () =>
  {
    const names=['sakshi','smriti','ayana','mihir'];
    const i=Math.floor(Math.random() * 4);
    return names[i];
     
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello {randomName()}!

        </p>
        
      </header>
    </div>
  );
}

export default App;
