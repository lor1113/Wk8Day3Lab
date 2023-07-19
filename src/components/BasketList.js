import BasketItem from './BasketItem'


const BasketList = ({itemList,basket}) => {
    let basketItems = itemList.filter(item => item.id in basket).map(item => (
        <BasketItem item={item} quantity={basket[item.id]}/>
    ))
    return (
        <table>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
            {basketItems}
        </table>
        )
}

export default BasketList;