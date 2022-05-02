import { useContext } from "react";
import { Context } from "../Context";

function CartItem ({item}) {
    const {removeItemToCart} = useContext(Context)
    return(
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={()=> removeItemToCart(item.id)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem;