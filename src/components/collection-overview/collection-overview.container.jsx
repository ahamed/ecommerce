import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);