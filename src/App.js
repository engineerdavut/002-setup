import logo from './logo.svg';
import './App.css';
import GrandParentComponent from './GrandParentComponent';
import StateInside from './StateInside';
import StateOutside from './StateOutside';
import ApplicationRouter from './routing/application/ApplicationRouter';
import { FetchList } from './fetch/FetchList';
import { Project } from './fetch/Project';
import FetchRoute from './fetch/FetchRoute';
import { TextFieldComponent } from './fetch/TextFieldComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApplicationRouter/>
        {/*<FetchList/>*/} 
        {/*<Project/>*/}
        {/*<FetchRoute/>*/}  
        <TextFieldComponent/>
      </header>
    </div>
  );
}

export default App;
