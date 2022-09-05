//components............
//Routing
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import { GlobalStyle } from './GlobalSyles';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <GlobalStyle/>
      </Router>
    </div>
   
    
  )  
  
}