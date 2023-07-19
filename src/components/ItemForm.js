

const ItemForm = ({item, quantity, handleModifyItem}) => {
    if (quantity === 0){
        return(
            <form id="modify-form" onSubmit={handleModifyItem}>
                <input type="number" id="quantity" name="quantity" size="5" defaultValue="1" min="1"/>
                <input type="hidden" id="item" name="item" value={item.id}/>
                <input type="submit" name="submit" value="Add Item"/>
            </form>
        )
    } else {
        return(
            <form id="modify-form" onSubmit={handleModifyItem}>
                <input type="number" id="quantity" name="quantity" size="5" defaultValue={quantity} min="0"/>
                <input type="hidden" id="item" name="item" value={item.id}/>
                <input type="submit" name="submit" value="Modify Quantity"/>
            </form>
        )
    }
}

export default ItemForm;