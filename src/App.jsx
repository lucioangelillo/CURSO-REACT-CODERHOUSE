import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import CheckOut from './components/CheckOut';




function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/category/carrito' element={<CheckOut />} />
          
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
