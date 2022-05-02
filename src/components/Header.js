import React, { useContext } from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"

/* # Challenge

Change the cart icon in the header to display the full cart icon if there are any items in the cart

Full class name to use WHEN ITEMS IN CART:
"ri-shopping-cart-fill ri-fw ri-2x"

Full class name to use WHEN CART IS EMPTY:
"ri-shopping-cart-line ri-fw ri-2x"
 */


function Header() {
    const {cartItems} = useContext(Context) 
    const cartIcon = cartItems.length > 0 ? <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> :
    <i className="ri-shopping-cart-line ri-fw ri-2x"></i>

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">{cartIcon}</Link>
        </header>
    )
}

export default Header
