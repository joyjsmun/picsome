/* # Challenge

Add ability to toggle an image's `isFavorited` property by clicking the heart icon (filled heart doesn't need to display on the image yet)

1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
    a. Have this function also console.log something so we know it's running correctly
    b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
2. Make it so clicking the heart icon on any given image runs this method */


import React,{createContext,useState,useEffect} from "react"

const Context = createContext()



function ContextProvider({children}){
    const [allPhotos,setAllPhotos] = useState([])

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    },[])

    // console.log(allPhotos)

    function toggleFavorite(id){
        const updatedPhoto = allPhotos.map(photo => {
            if(photo.id === id){
                console.log(id)
                console.log(!photo.isFavorite)
                return { ...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedPhoto)
    }

    return(
        <Context.Provider value={{allPhotos,toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}