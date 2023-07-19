import ItemForm from './ItemForm'
import styled from 'styled-components';


const ItemBar = ({item, quantity, handleModifyItem}) => {    
    return (
        <tr>
            <td>{item.name}</td>
            <td>£{item.price}</td>
            <td>{(quantity === 0 ? "Not In Basket" : quantity + " In Basket" )}</td>
            <td><ItemForm item={item} quantity={quantity} handleModifyItem={handleModifyItem}/></td>
        </tr>
    )
}

export default ItemBar;