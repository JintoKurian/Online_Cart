import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductList from './Pages/ProductList';
import CartList from './Pages/CartList';

function App() {
  return (
    <div className="App">
        <Header />

      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<CartList />} />

      </Routes>
    </div>
  );
}

export default App;
