import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
