import "./global.scss";
import "./components/fonts/fontawesome-free-5.15.3-web/css/all.min.css";
import NavBar from "./components/Layout/NavBar";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";
import ProductDetail from "./components/Main/Products/ProductDetail/ProductDetail";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app ">
      <Header />
      <NavBar className='nav'/>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/detail" exact>
          <ProductDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
