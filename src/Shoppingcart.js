import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CartStore from "./CartStore";
import Shoppingcartitem from "./Shoppingcartitem";
import { useDispatch } from "react-redux";
import { clearCart } from "./CartHelper";

export default function Shoppingcart() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  let updateCart = () => {
    const state = CartStore.getState();
    if (state) {
      const cart = state.cart;
      const totalAmount = state.cart.reduce(
        (p, n) => p + n.quantity * n.price,
        0
      );
      setCart(cart);
      setTotalAmount(totalAmount);
    }
  };

  let handleOrderClick = () => {
    dispatch(clearCart());
    history.push("/confirm");
  };

  useEffect(() => {
    updateCart();
    CartStore.subscribe(() => {
      updateCart();
    });
  }, []);

  return (
    <div className="container" id="carttable">
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Price</th>
            <th scope="col"># Tickets</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <Shoppingcartitem event={item} key={item.id} />
          ))}
        </tbody>
        <tfoot>
          <tr className="align-middle">
            <td colSpan="5" className="text-center">
              <button
                type="button"
                id="btnOrder"
                onClick={handleOrderClick}
                className="btn btn-primary btn-primary-themed btn-md font-upper"
              >
                Order for ${totalAmount}
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
