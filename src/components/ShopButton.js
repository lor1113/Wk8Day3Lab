const ShopButton =({buttonText, clickHandler}) => {
    return(
        <button onClick={clickHandler} type="button">{buttonText}</button> 
    )
}

export default ShopButton;