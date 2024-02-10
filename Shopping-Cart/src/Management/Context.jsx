import { createContext, useContext, useReducer ,useEffect } from "react";
import CartData from "../components/CartData";
import reducer from "./Reducer";

const initState = {
    cart:CartData,
    total:0,
    amount:0
}
const CartContext = createContext()

export const MyCartContext = ()=>{
    return useContext(CartContext)
}

const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initState)

    useEffect(()=>{
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.cart])
    
    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const toggleQuantity = (id,type)=>{
        dispatch({type:"QUANTITY_TOGGLE",payload:{id,type}})
    }

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    return(
        <CartContext.Provider value={{...state,removeItem,toggleQuantity,formatNumber}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}