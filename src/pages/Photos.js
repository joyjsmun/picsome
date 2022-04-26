import React, { useContext } from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    const imageElement = allPhotos.map((img,index) =>(
        <Image key={img.id} img={img} className={getClass(index)} />
    ))

    return (
            <main className="photos">
                {imageElement}
            </main>
    
    )
}

export default Photos


