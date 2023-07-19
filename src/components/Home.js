import ItemBar from './ItemBar'
import ShopButton from './ShopButton';
import {useNavigate} from "react-router-dom";

const Home = ({itemList,basket,setBasket}) => {
    const navigate = useNavigate();
    const handleModifyItem = function(event){
        event.preventDefault()
        let newBasket = {...basket}
        newBasket[event.target.item.value] = parseInt(event.target.quantity.value)
        setBasket(newBasket)
    }

    const goToCheckout = function(event){
        event.preventDefault()
        navigate("/checkout")
    }
    
    let itemBars = itemList.map(item => (
        <ItemBar item={item} quantity={(item.id in basket ? basket[item.id] : 0)} handleModifyItem={handleModifyItem}/>
    ))
    return (
        <div>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>In Basket?</th>
                    <th>Add Item?</th>
                </tr>
                {itemBars}
            </table>
            <ShopButton buttonText="Go to Checkout" clickHandler = {goToCheckout}/>
        </div>
    )
}

export default Home;