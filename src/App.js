import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import "./App.css";
import SideBarRouting from './component/landing-page-sidebar/index';

function App() {
  return (
        <div className="App">
        <Router >
          <Routes>
            <Route exact path ='/' element = { <Home /> } />
            <Route path = '/*' element = { <SideBarRouting /> } />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
