import React, { useState, useEffect } from 'react';
import DiscountsUsed from './DiscountsUsed'

const ShopDiscounts = ({discountCodes,checkoutTotal,setCheckoutTotal}) => {
    const [usedDiscounts, setUsedDiscounts] = useState([])

    const handleAddDiscount = function(event){
        event.preventDefault()
        let discount = discountCodes.find(x => x.code === event.target.code.value)
        if(discount === undefined){
            document.getElementById("discount-form").reset();
            window.confirm("Invalid discount code!");
            return 0
        }
        if (usedDiscounts.includes(discount.code)){
            document.getElementById("discount-form").reset();
            window.confirm("You've already applied this discount code!");
        } else {
            let newUsedDiscounts = [...usedDiscounts]
            newUsedDiscounts.push(discount.code)
            let newCheckoutTotal = checkoutTotal.valueOf()
            newCheckoutTotal = Math.ceil(newCheckoutTotal * (1 - discount.discount))
            setUsedDiscounts(newUsedDiscounts)
            setCheckoutTotal(newCheckoutTotal)
            document.getElementById("discount-form").reset();
            window.confirm("Discount code " + discount.code + " applied successfully.");
        }
    }

    return (
        <div>
            <DiscountsUsed usedDiscounts={usedDiscounts}/>
            <form id="discount-form" onSubmit={handleAddDiscount}>
                <input type="text" id="code" name="code" min="1"/>
                <input type="submit" name="submit" value="Add Discount Code"/>
            </form>
        </div>
    )
}

export default ShopDiscounts;