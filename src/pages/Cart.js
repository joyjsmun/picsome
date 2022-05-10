/*
# Challenge

Let our user place their order!

Clicking the "Place Order" button should:
1. Change the text to "Ordering..."
2. Timeout for 3 seconds (to simulate an order being placed)
3. Log "Order placed!" to the console
4. Empty out the cart

 */
import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems} = useContext(Context)
    const [text,setText] = useState("Place Order")
    const cartElements = cartItems.map(item => (
        <CartItem item={item} key={item.key} />
    ))

    const handleOrder =  () => {
       setTimeout(() => {
           setText("Ordering...")
           console.log("Order Placed")
       },[3000])
       
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>´
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button onClick={handleOrder}>{text}</button>
            </div>
            {cartElements}
        </main>
    )
}

export default Cart