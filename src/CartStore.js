import { createStore } from "redux";
import CartReducer from "./CartReducer";

const CartStore = createStore(CartReducer);

export default CartStore;