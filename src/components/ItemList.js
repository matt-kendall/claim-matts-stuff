import React from 'react';
import ItemCard from './ItemCard'

const ItemList = ({items}) => {
    return (<div>
        { items.map(item => { return <ItemCard item={item}/> }) }
    </div>)
}

export default ItemList;
