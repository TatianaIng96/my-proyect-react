//components............
//Routing
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React from 'react';
import Bts from './components/Bts';
import { GlobalStyle } from './GlobalSyles';

export default function App() {
  return (
    <Router>
      <Bts />
    <GlobalStyle/>
    </Router>
    
  )  
  
}