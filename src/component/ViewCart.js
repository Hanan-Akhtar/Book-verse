import { useContextApi } from "./CartContext";
import ViewCartData from "./ViewCartData";
import { useState } from "react";

const ViewCart = () => {
    const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useContextApi();
    const [totalPrice, setTotalPrice] = useState(0);


    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const increaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
        calculateTotalPrice(newCartItems); 
    };

    const decreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity--;
            setCartItems(newCartItems);
            calculateTotalPrice(newCartItems); 
        }
    };

    const calculateTotalPrice = (cartItems) => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        setTotalPrice(totalPrice);
    };

   

   
    return ( 
        <>
         <ViewCartData
                    cartItems={cartItems}
                    totalPrice={totalPrice}
                    isCartOpen={isCartOpen}
                    removeFromCart={removeFromCart}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    calculateTotalPrice={calculateTotalPrice} 
                />

        </>
     );
}
 
export default ViewCart;