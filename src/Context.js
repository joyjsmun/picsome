
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

   function removeItemToCart(id){
       setCartItems(prevItems => prevItems.filter(item => item.id !== id))
   }

   function emptyCart(){
       setCartItems([])
   }

 

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
        <Context.Provider value={{allPhotos,cartItems,toggleFavorite,addItemToCart,removeItemToCart,emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}