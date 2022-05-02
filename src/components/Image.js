import { Context } from "../Context"

import React, { useState,useContext } from "react"

function Image({className, img}) {
    const {toggleFavorite} = useContext(Context)
    const [hovered,setHovered] = useState(false)
    const heartIcon = hovered && <i className={img.isFavorite === true ? "ri-heart-fill favorite" : "ri-heart-line favorite"} onClick={() => toggleFavorite(img.id)}></i> 
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img  src={img.url} className="image-grid"/>
           {heartIcon}
           {cartIcon}
           
        </div>
    )
}

export default Image
