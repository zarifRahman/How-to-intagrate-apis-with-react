import UuidStore from "./UuidStore";

const CartReducer = async (state = { cart: [] }, action) => {
    let cart = state.cart;
    let response;

    switch (action.type) {
        case "add": 
            await fetch(
                "http://localhost:3333/cart",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-SESSION-TOKEN": UuidStore.value
                    },
                    body: JSON.stringify({
                        id: action.payload.id
                    })
                }
            );
            response = await fetch(
                "http://localhost:3333/cart",
                {
                    method: "GET",
                    headers: {
                        "X-SESSION-TOKEN": UuidStore.value
                    }
                }
            );

            cart = await response.json();
            return {
                ...state,
                cart: cart
            };
 
        case "update":
            if (action.payload.quantity === 0) {
                await fetch(
                    "http://localhost:3333/cart", {
                        method: "DELETE",
                        headers: { 
                            "Content-Type": "application/json",
                            "X-SESSION-TOKEN": UuidStore.value
                        },
                        body: JSON.stringify({
                            id: action.payload.event_id
                        })
                    });
            } else {
                await fetch(
                    "http://localhost:3333/cart", {
                        method: "PATCH",
                        headers: { 
                            "Content-Type": "application/json",
                            "X-SESSION-TOKEN": UuidStore.value
                        },
                        body: JSON.stringify({
                            id: action.payload.event_id,
                            quantity: action.payload.quantity
                        })
                    });    
            }
            response = await fetch(
                "http://localhost:3333/cart", {
                    method: "GET",
                    headers: { 
                        "X-SESSION-TOKEN": UuidStore.value
                    }
                });
                
            cart = await response.json();
            return {
                ...state,
                cart: cart
            };
        case "delete":
            await fetch(
                "http://localhost:3333/cart", {
                    method: "DELETE",
                    headers: { 
                        "Content-Type": "application/json",
                        "X-SESSION-TOKEN": UuidStore.value
                    },
                    body: JSON.stringify({
                        id: action.payload.event_id
                    })
                });
            response = await fetch(
                "http://localhost:3333/cart", {
                    method: "GET",
                    headers: { 
                        "X-SESSION-TOKEN": UuidStore.value
                    }
                });
                
            cart = await response.json();
            return {
                ...state,
                cart: cart
            };
        case "clear":
            await fetch(
                "http://localhost:3333/cart", {
                    method: "DELETE",
                    headers: { 
                        "Content-Type": "application/json",
                        "X-SESSION-TOKEN": UuidStore.value
                    }
                });
            response = await fetch(
                "http://localhost:3333/cart", {
                    method: "GET",
                    headers: { 
                        "X-SESSION-TOKEN": UuidStore.value
                    }
                });
                
            cart = await response.json();
            return {
                ...state,
                cart: cart
            };
        default:
            return {
                ...state,
                cart: cart
            };
    }
};

export default CartReducer;
