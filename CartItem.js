import React from 'react';

const CartItem =(props)=> {
    
    // increaseQuantity = () => {
    //     console.log(this.state);
    //     this.setState({ qty: this.state.qty + 1 });
    // }
    //  decreaseQuantity = () => {
    //     console.log(this.state);
    //     this.setState({ qty: this.state.qty -1 });
    // }

        const { price, title, qty } = props.product;
        const{product, onIncreaseQuantity, onDecreaseQuantity,  onDeleteProduct} = props;
        return (
            <
            div className = 'cart-item' >

            <
            div className = 'left-block' >
            <
            img style = { styles.image }
            /> < /
            div > <
            div className = 'right-block' >
            <
            div style = {
                { fontSize: 25 }
            } > { title}< /div> <
            div style = {
                { color: '#777' }
            } > {price} < /div> <
            div style = {
                { color: '#777' }
            } > qty:{qty} < /div>
                                    <
 div className = 'cart-item-actions' > { /*buttons*/ } <
            img alt = 'increase'
            className = 'action-icons'
            src = 'https://cdn-icons-png.flaticon.com/512/748/748113.png' onClick={()=>{onIncreaseQuantity(product)}} / >
            <
            img alt = 'decrease'
            className = 'action-icons'
            src = 'https://cdn-icons-png.flaticon.com/512/992/992683.png' onClick={()=>{onDecreaseQuantity(product)}} / >
            <
            img alt = 'delete'
            className = 'action-icons'
            src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png' onClick={()=>{onDeleteProduct(product.id)}}/ >
            
                                    </div>
                                    
                                    < /
            div > <
            /div> 
        );
    }
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'

    }
}
export default CartItem;