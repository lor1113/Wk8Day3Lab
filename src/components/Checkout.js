import BasketList from './BasketList'
import ShopButton from './ShopButton';
import ShopDiscounts from './ShopDiscounts';
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';
const Checkout = ({itemList,basket,setBasket, discountCodes}) => {
    const navigate = useNavigate();
    
    const subTotals = itemList.filter(item => item.id in basket).map(item => (
        basket[item.id] * item.price
    ))

    const initialTotal = subTotals.reduce((a, b) => a + b, 0);
    const [checkoutTotal,setCheckoutTotal] = useState(initialTotal)

    const basketCheckout = function(event){
        event.preventDefault()
        if (checkoutTotal !== 0){
            window.confirm("We've just sent you a bill for £" + checkoutTotal);
        }
        setBasket([])
        navigate('/')
    }
    return(
        <div>
            <BasketList itemList={itemList} basket={basket}/>
            <ShopDiscounts discountCodes = {discountCodes} checkoutTotal={checkoutTotal} setCheckoutTotal={setCheckoutTotal}/>
            Final Total: {checkoutTotal}
            <ShopButton buttonText="Checkout Basket" clickHandler = {basketCheckout}/>
        </div>
    )
}

export default Checkout;