import axios from "axios";
import UuidStore from "./UuidStore";

async function _getCart() {
  const response = await axios.get("http://localhost:3333/cart", {
    headers: {
      "X-SESSION-TOKEN": UuidStore.value,
    },
  });

  let cart = response.data;
  return cart;
}

export function addCart(id) {
  return async function addCartThunk(dispatch, getState) {
    await axios.post(
      "http://localhost:3333/cart",
      {
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-SESSION-TOKEN": UuidStore.value,
        },
      }
    );
    let cart = await _getCart();
    dispatch({ type: "refresh", payload: cart });
  };
}

export function updateCart(id, quantity) {
  return async function updateCartThunk(dispatch, getState) {
    if (quantity === 0) {
      await axios.delete("http://localhost:3333/cart", {
        headers: {
          "Content-Type": "application/json",
          "X-SESSION-TOKEN": UuidStore.value,
        },
        data: {
          id: id,
        },
      });
    } else {
      await axios.patch(
        "http://localhost:3333/cart",
        {
          id: id,
          quantity: quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-SESSION-TOKEN": UuidStore.value,
          },
        }
      );
    }

    let cart = await _getCart();
    dispatch({ type: "refresh", payload: cart });
  };
}

export function deleteCart(id) {
  return async function deleteCartThunk(dispatch, getState) {
    await axios.delete("http://localhost:3333/cart", {
      headers: {
        "Content-Type": "application/json",
        "X-SESSION-TOKEN": UuidStore.value,
      },
      data: {
        id: id,
      },
    });

    let cart = await _getCart();
    dispatch({ type: "refresh", payload: cart });
  };
}

export function clearCart() {
  return async function deleteCartThunk(dispatch, getState) {
    await axios.delete("http://localhost:3333/cart", {
      headers: {
        "Content-Type": "application/json",
        "X-SESSION-TOKEN": UuidStore.value,
      },
    });

    let cart = await _getCart();
    dispatch({ type: "refresh", payload: cart });
  };
}
