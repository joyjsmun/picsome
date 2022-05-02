

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