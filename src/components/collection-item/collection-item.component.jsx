import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import {
    CollectionItemContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameSpan,
    PriceSpan,
    CustomButtonContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <ImageContainer style ={{backgroundImage: `url(${imageUrl})`}} />
            <CollectionFooterContainer>
                <NameSpan>{ name }</NameSpan>
                <PriceSpan>${ price }</PriceSpan>
            </CollectionFooterContainer>
            <CustomButtonContainer>
                <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
            </CustomButtonContainer>
        </CollectionItemContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);