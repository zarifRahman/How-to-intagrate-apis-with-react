import { createStore, applyMiddleware } from "redux";
import CartReducer from "./CartReducer";
import thunkMiddleware from "redux-thunk";

const thunkMiddle = applyMiddleware(thunkMiddleware);
const CartStore = createStore(CartReducer, thunkMiddle);

export default CartStore;
