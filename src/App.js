import React, {useState,createContext} from 'react'

import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>} />            
            </Routes>
        </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
