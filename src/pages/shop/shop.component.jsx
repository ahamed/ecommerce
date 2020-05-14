import React from 'react';

import collections from '../../data/collections';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections
        }
    }

    render() {
        const {
            collections
        } = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionsProps}) => (
                        <CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage ;