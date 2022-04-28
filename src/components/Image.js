/* # Challenge

Conditionally render the heart and plus icons when an Image component is being hovered on

1. Icon to render for the heart:
<i className="ri-heart-line favorite"></i>

2. Icon to render for the plus:
<i className="ri-add-circle-line cart"></i> */

import React, { useState } from "react"

function Image({className, img}) {
    const [hovered,setHovered] = useState(false)
    const heartIcon = hovered &&  <i className="ri-heart-line favorite"></i>
    const cartIcon = hovered &&     <i className="ri-add-circle-line cart"></i>

    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} src={img.url} className="image-grid"/>
           {heartIcon}
           {cartIcon}
        </div>
    )
}

export default Image
