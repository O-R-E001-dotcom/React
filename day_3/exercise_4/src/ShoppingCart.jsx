import { useState } from "react";
import "./Shoppingcart.css"

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Sardine", price: 1500, quantity: 5 },
        { id: 2, name: "Ankara", price: 20000, quantity: 10 },
        { id: 3, name: "Palm oil", price: 1200, quantity: 8 },
    ]);

  
    function increaseQuantity(id) {
        setCartItems(
        cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        );
    }

    function decreaseQuantity(id) {
        setCartItems(
        cartItems.map((item) =>
            item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        );
    }

    function removeItem(itemId) {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    }

    function clearCart() {
        setCartItems([]);
    }


    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="shopping-app">
        <h2>🛒 Shopping Cart</h2>

        {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            cartItems.map((item) => (
            <div className="cart-item" key={item.id}
            >
                <p>
                <strong>{item.name}</strong> - ₦{item.price.toLocaleString()} x{" "}
                {item.quantity} = ₦
                {(item.price * item.quantity).toLocaleString()}
                </p>

                <div className="button">
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            </div>
            ))
        )}

        {cartItems.length > 0 && (
            <>
            <h3>Total: ₦{total.toLocaleString()}</h3>
            <button onClick={clearCart}>Clear Cart</button>
            </>
        )}
        </div>
    );
}

export default ShoppingCart;
