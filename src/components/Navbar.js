import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => {
    return {
      cart: state.cart.cart,
      cartUpdated: () => {
        return true;
      },
    };
  });
  //Using to Update Cart
  cart.cartUpdated();
  //Total
  let total = 0;
  cart.cart.map((item) => (total += item.product.price * item.quantity));

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">
            Shopping cart
          </NavLink>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/my-cart">
                {cart.cart.length > 0 ? (
                  <span className="label label-info">
                    {cart.cart.length} items: (${total.toFixed(2)})
                  </span>
                ) : null}
                <i className="glyphicon glyphicon-shopping-cart"></i> My Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
