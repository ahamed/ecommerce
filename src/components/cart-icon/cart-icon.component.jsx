import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ onToggleCartHidden, cartCount }) => (
    <div className="cart-icon" onClick={onToggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount
});

const mapDispatchToStates = dispatch => ({
    onToggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps,
    mapDispatchToStates
)(CartIcon);