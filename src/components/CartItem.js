import { useContext, useState } from "react";
import { Context } from "../Context";

function CartItem ({item}) {
    const {removeItemToCart} = useContext(Context)
    const [hover,setHover] = useState(false)
    const handleHover = () => {
        setHover(true)
    }
    return(
        <div className="cart-item">
            <i className={hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"} onClick={()=> removeItemToCart(item.id)} onMouseOver={() => setHover(true)}  onMouseLeave ={() => setHover(false)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem;