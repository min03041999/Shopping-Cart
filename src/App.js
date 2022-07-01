import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/my-cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
