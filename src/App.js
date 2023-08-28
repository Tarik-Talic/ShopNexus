import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/register-form/login-page/Login";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Category from "./components/products/Category";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="category/:categoryName" element={<Category />} />
        </Route>
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/login" element={<Login header="Login" />} />
        <Route path="/singUp" element={<Login header="Register" />} />
      </Routes>
    </div>
  );
}

export default App;
