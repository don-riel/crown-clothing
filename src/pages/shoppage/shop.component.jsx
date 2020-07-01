import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import Shop_Data from '../../redux/shop/shop.data';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Shop_Data
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;