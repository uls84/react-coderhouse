import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainers/ItemListContainer';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/Detail/:id' element={< Detail />} />
        </Routes>
      </BrowserRouter>
      <ItemListContainer />
    </div>
  );
}

export default App;