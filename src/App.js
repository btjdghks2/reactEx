import {  Route, Routes } from 'react-router-dom';
import Sidebar from './components_passvie/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Main } from './components_ability/Main';
import { Make } from './components_ability/Make';
import { Cover } from './components_ability/Cover';
import { Remove } from './components_ability/Remove';
import {Container} from 'react-bootstrap';


function App() {
  return (
    <div className="App">

      <Sidebar/>
    <Container>
      <Routes>
        <Route path="/" exact={true} component={ <Main /> }></Route>
        <Route path="/make" exact={true} component={ <Make/> } ></Route>
        <Route path="/cover" exact={true} component={ <Cover /> }></Route>
        <Route path="/remove" exact={true} component={ <Remove/> }></Route>
      </Routes>
      </Container>

    </div>
  );
}

export default App;
