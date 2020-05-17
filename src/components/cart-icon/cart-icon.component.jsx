import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
    CartIconContainer,
    ShoppingIconStyle,
    ItemCountStyle
} from './cart-icon.styles';

const CartIcon = ({ onToggleCartHidden, cartCount }) => (
    <CartIconContainer onClick={onToggleCartHidden}>
        <ShoppingIconStyle />
        <ItemCountStyle>{cartCount}</ItemCountStyle>
    </CartIconContainer>
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