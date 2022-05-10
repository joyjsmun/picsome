
/*
# Challenge

1. Only render the "Place Order" button if there are items in the cart

2. Change the trash icon to a filled-in trash icon when hovering over it

Filled trash icon to use when hovering:
<i className="ri-delete-bin-fill"></i>

Empty trash icon to use when NOT hovering:
<i className="ri-delete-bin-line"></i>

 */


import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems,emptyCart} = useContext(Context)
    const [text,setText] = useState("Place Order")
    const cartElements = cartItems.map(item => (
        <CartItem item={item} key={item.key} />
    ))

    const totalCost = cartElements.length*5.99

    const handleOrder =  () => {
        if(cartElements.length > 0){
       setTimeout(() => {
           setText("Ordering...")
           console.log("Order Placed!")
           emptyCart()
       },[3000])
    }else{
        document.getElementsByTagName("button").disabled = true
        console.log("disable")
    }
       
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            
            <div className="order-button">
                <button onClick={handleOrder}>{text}</button>
            </div>
            {cartElements}
            <p className="total-cost"> Total: {`${totalCost.toLocaleString("en-US", {style: "currency", currency: 'USD' })}`}</p>

        </main>
    )
}

export default Cart