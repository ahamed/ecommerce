import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { addShopCollections } from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;


    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        const { addShopCollections } = this.props;

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = await convertCollectionsSnapshotToMap(snapshot);
            addShopCollections(collectionMap);
            this.setState({ loading: false });
        });

        console.log(this.unsubscribeFromSnapshot);
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addShopCollections: collections => dispatch(addShopCollections(collections))
});


export default connect(null, mapDispatchToProps)(ShopPage);