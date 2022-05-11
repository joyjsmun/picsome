

import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems,emptyCart} = useContext(Context)
    const [text,setText] = useState("Place Order")
    const cartElements = cartItems.map(item => (
        <CartItem item={item} key={item.key} />
    ))

    const totalCost = cartElements.length*5.99;
 

    const handleOrder =  () => {
        if(cartElements.length > 0){
       setTimeout(() => {
           setText("Ordering...")
           console.log("Order Placed!")
           emptyCart()
       },[3000])
    }
       
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p className="total-cost"> Total: {`${totalCost.toLocaleString("en-US", {style: "currency", currency: 'USD' })}`}</p>

            {cartElements.length > 0 ?
        <div className="order-button">
        <button onClick={handleOrder}>{text}</button>
    </div>    
    : 
    <h1>You have no items in your cart</h1>
        }

        </main>
    )
}

export default Cart