import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/header/Header';
import HomePage from './pages/home-page/HomePage';
import ProfilePage from './pages/profile-page/ProfilePage';
import ProductPage from './pages/product-page/ProductPage';
import ProductsContainer from './components/containers/ProductsContainer';
import CartPage from './pages/shoppingCart-page/CartPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductPage />}>
          <Route
            path="category/:categoryName"
            element={<ProductsContainer />}
          />
        </Route>
        <Route path="/shopping-cart" element={<CartPage />} />
        <Route path="/profile-info" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
