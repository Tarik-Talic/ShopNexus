import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/home-page/HomePage';
import Products from './pages/product-page/ProductPage';
import Category from './components/products/Category';
import Cart from './components/cart/Cart';
import ProfilePage from './components/profile-page/ProfilePage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />}>
          <Route path="category/:categoryName" element={<Category />} />
        </Route>
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/profile-info" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
