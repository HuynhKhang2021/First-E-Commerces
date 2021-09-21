import React from 'react'
import CartContent from '../Cart/CartContent'
import './CartPage.scss'
const CartPage = () => {
    return (
        <div className="cart container-fluid">
            <div className="cart-steps row">
                <h4 className="cart-step__shopping active">shopping cart</h4>
                <i class="fas fa-chevron-right cart-icon__right"></i>
                <h4 className="cart-step__checkout">checkout details</h4>
                <i class="fas fa-chevron-right cart-icon__right"></i>
                <h4 className="cart-step__complete">order complete</h4>
            </div>
            <div className="code-discount row">
                <h4 className="code-discount__heading">USE CODE DARREL10 FOR 10% OFF!</h4>
            </div>
            <CartContent />
        </div>
    )
}

export default CartPage
