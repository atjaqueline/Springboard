import React from 'react';

import VendingMachine from './VendingMachine';
import Navbar from './Navbar';
import Pepsi from './Pepsi';
import Cheescake from './Cheescake';
import Oranges from './Oranges';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
     <Routes> 
    <Route exact path="/">
      <Pepsi />
    </Route>
     </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
