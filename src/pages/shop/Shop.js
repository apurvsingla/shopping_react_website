import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

class Shop extends Component {
    constructor(props){
        super(props);
        this.state ={
            collection: SHOP_DATA
        }
    }
    render() {
        const {collection} = this.state;
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
}

export default Shop;
