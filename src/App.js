import logo from './headshot.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Story />
      <Resume />
      <Projects />
      <Testimonials /> */}
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Eric F. Olsen
      </h1>
      <h3>
        Software Engineer
      </h3>
    </header>
  );
}

function Story() {
  return (
    <div className="section">
      <h2>my story goes here!</h2>
    </div>
  );
}

function Resume() {
  return (
    <div className="section">
      <h2>resume goes here!</h2>
    </div>
  );
}

function Projects() {
  return (
    <div className="section">
      <h2>projects go here!</h2>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="section">
      <h2>testimonials go here!</h2>
    </div>
  );
}

export default App;
