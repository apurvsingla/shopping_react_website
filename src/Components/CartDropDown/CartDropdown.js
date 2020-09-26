import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import './CartDropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem}/>):
                        <span className="empty-message">Your Cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, null)(CartDropdown));