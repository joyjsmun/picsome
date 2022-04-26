import React,{createContext,useState,useEffect} from "react"

const Context = createContext()



function ContextProvider({children}){
    const [allPhotos,setAllPhotos] = useState([])

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    },[])

    console.log(allPhotos)
    return(
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}