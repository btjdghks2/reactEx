
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './components_passive/head';
import Sidebar from './components_passvie/sidebar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Head />
      <Sidebar />
      <Routes>
        <Route path="/" element={ main }></Route>
        <Route path="/make" element={ make } ></Route>
        <Route path="/cover" element={ cover }></Route>
        <Route path="/remove" element={ remove }></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
