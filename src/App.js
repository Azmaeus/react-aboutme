import logo from './headshot.jpg';
import './App.css';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Eric F. Olsen
        </h1>
        <h3>
          Software Engineer
        </h3>
      </header>
      <Story />
    </div>
  );
}

export default App;
