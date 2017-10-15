import React from 'react';
import BidForm from '../components/BidForm';

const descriptionStyle = {
    // Preserve newlines in the JSON
    whiteSpace: 'pre-line'
};

const ItemDetail = ({item}) => {
  return (<div>
      <h1>{item.name}</h1>
      <p style={descriptionStyle}>{item.description}</p>
      <h2>Bids:</h2>
      <ul>
          {item.bids.map(b => (<li>{b.user}</li>))}
      </ul>
      <h2>Place a bid</h2>
      <BidForm item={item}/>
  </div>)
}

export default ItemDetail;
