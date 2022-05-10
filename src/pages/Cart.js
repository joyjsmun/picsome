
/*
# Challenge

Calculate the total cost of the items in the cart and display it on the Cart page

1. Usually the item in the database will have it's own cost saved, but we're assuming every item we sell costs $5.99, so you can just hard code that cost in
2. To very easily display the total cost in US dollars (or whatever currency you want), use the following:

`<number>.toLocaleString("en-US", {style: "currency", currency: "USD"})`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

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
       setTimeout(() => {
           setText("Ordering...")
           console.log("Order Placed!")
           emptyCart()
       },[3000])
       
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