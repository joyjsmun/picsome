/* # Challenge

Setup context to manage items in an array called `cartItems`. This will be an array of image objects.

1. Add the `cartItems` state to context. (Array)
2. Add function to add an image to the cart. (Takes the full image object as parameter)
3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)
 */

import React,{createContext,useState,useEffect} from "react"

const Context = createContext()



function ContextProvider({children}){
    const [allPhotos,setAllPhotos] = useState([])
    const [cartItems,setCartItems] = useState([])

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    },[])

    // console.log(allPhotos)

   function addItemToCart(newItem){
       setCartItems(prevItem => [...prevItem,newItem])
   }

    console.log(cartItems)

    function toggleFavorite(id){
        const updatedPhoto = allPhotos.map(photo => {
            if(photo.id === id){
                return { ...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedPhoto)
    }

    return(
        <Context.Provider value={{allPhotos,cartItems,toggleFavorite,addItemToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}