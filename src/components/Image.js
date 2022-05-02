import { Context } from "../Context"
import PropTypes, { element } from "prop-types"

import React, { useState,useContext } from "react"

function Image({className, img}) {
    const {toggleFavorite,addItemToCart,cartItems} = useContext(Context)
    const [hovered,setHovered] = useState(false)
    const heartIcon = hovered && <i className={img.isFavorite === true ? "ri-heart-fill favorite" : "ri-heart-line favorite"} onClick={() => toggleFavorite(img.id)}></i> 
    function cartIcon(){
        const insideCartItem = cartItems.find(element => element.id === img.id)
        if(insideCartItem){
            return hovered && <i className="ri-add-circle-fill cart" onClick={() => addItemToCart(img)}></i>
        }else if(hovered){
            return hovered && <i className="ri-add-circle-line cart" onClick={() => addItemToCart(img)}></i>
        }
    }
    //  hovered && <i className="ri-add-circle-line cart" onClick={() => addItemToCart(img)}></i>
    

    return (
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img  src={img.url} className="image-grid"/>
           {heartIcon}
           {cartIcon()}
           
        </div>
    )
}

Image.propTypes = {
    className : PropTypes.string,
    img : PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    })
}

export default Image
