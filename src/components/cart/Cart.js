import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const Cart = () => {
  let total = 0;
  const cartSelecttor = useSelector((state) => state.cart.cart);

  cartSelecttor.map((item) => (total += item.product.price * item.quantity));

  const cart =
    cartSelecttor.length > 0 ? (
      <div>
        <div className="panel-body">
          {cartSelecttor.map((item) => {
            return (
              <div key={item.product.id}>
                <Item item={item} />
                <hr />
              </div>
            );
          })}
        </div>
        <div className="panel-footer">
          <div className="row text-center">
            <div className="col-xs-11">
              <h4 className="text-right">
                Total <strong>${total.toFixed(3)}</strong>
              </h4>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="panel-body">
        <p>Cart is empty</p>
      </div>
    );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-xs-12">
          <div className="panel panel-info">
            <div className="panel-heading">
              <div className="panel-title">
                <div className="row">
                  <div className="col-xs-6">
                    <h5>
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                      My Shopping Cart
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {/* Cart Item  */}
            {cart}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
