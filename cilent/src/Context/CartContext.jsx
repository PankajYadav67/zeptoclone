import { Children, useContext } from "react";



 const CartContext = useContext();


export const CartProvider = (children) =>{
    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )

}