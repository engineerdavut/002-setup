import logo from './logo.svg';
import './App.css';
import GrandParentComponent from './GrandParentComponent';
import StateInside from './StateInside';
import StateOutside from './StateOutside';
import ApplicationRouter from './routing/application/ApplicationRouter';
import { FetchList } from './fetch/FetchList';
import { Project } from './fetch/Project';
import FetchRoute from './fetch/FetchRoute';
import { TextField } from './fetch/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApplicationRouter/>
        {/*<FetchList/>*/} 
        {/*<Project/>*/}
        {/*<FetchRoute/>*/}  
        <TextField/>
      </header>
    </div>
  );
}

export default App;
