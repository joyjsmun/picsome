/* # Challenge

On the Image component, track the hover state

1. Create state boolean for "hovered"
2. When the mouse enters the Image's div, set "hovered" to true
3. When the mouse leaves the Image's div, set "hovered" to false
4. Log "hovered" to the console so you know it's changing successfully. */



import React, { useState } from "react"

function Image({className, img}) {
    const [hovered,setHovered] = useState(false)

    function handleHover(){
        setHovered(prev => !prev)
        console.log(hovered)
    }

    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image
