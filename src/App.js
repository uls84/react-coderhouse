import React from 'react';
import './App.css';
import './firebase/config';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './routes/Home';
import Category from './routes/Category';
import Nosotros from './routes/Nosotros';
import ItemDetailContainer from './components/itemlistcontainers/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from 'context/CartContext';
import CheckOut from './components/checkout/CheckOut';
import Cart from './routes/Cart';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Category/:id' element={< Category />} />
            <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/Nosotros' element={<Nosotros />} />
            <Route exact path='/checkout' element={<CheckOut />} />
            <Route exact path='/Cart' element={<Cart />} />
          </Routes>
       </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;