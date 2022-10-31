import React from 'react';
import './App.css';
import './firebase/config';

import { Context, ContextPersist } from "./store/context"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './routes/Home';
import Category from './routes/Category';
import Nosotros from './routes/Nosotros';
import RouteCart from './routes/RouteCart';
import ItemDetailContainer from './components/itemlistcontainers/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cart/Cart';
import CartProvider from 'context/CartContext';


function App() {
  return (
    <ContextPersist><Context>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <CartProvider>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Category/:id' element={< Category />} />
            <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/Nosotros' element={<Nosotros />} />
            <Route exact path='/RouteCart' element={<RouteCart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
    </Context></ContextPersist >
  );
}

export default App;