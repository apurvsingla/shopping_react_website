import React from 'react';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';
import {selectCollections} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
const Shop = ({collection}) => {
    return (
        <div className="shop-page">
            {
                collection.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ) )
            }
        </div>
    );
}

const mapDispatchToProps = createStructuredSelector({
    collection: selectCollections
})

export default connect(mapDispatchToProps)(Shop);
