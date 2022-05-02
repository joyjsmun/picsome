import React, { useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems} = useContext(Context)
    const cartElements = cartItems.map(item => (
        <CartItem item={item} key={item.key} />
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>´
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
            {cartElements}
        </main>
    )
}

export default Cart