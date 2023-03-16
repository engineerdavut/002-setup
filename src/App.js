import logo from './logo.svg';
import './App.css';
import GrandParentComponent from './GrandParentComponent';
import StateInside from './StateInside';
import StateOutside from './StateOutside';
import ApplicationRouter from './routing/application/ApplicationRouter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApplicationRouter/>
      </header>
    </div>
  );
}

export default App;
