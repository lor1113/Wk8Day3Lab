import styled from 'styled-components';

const BasketItem = ({item, quantity}) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>£{item.price}</td>
            <td>{quantity} in basket</td>
            <td>£{item.price * quantity}</td>
        </tr>
    )
}

export default BasketItem;