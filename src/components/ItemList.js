import React from 'react';
import Radium from 'radium';
import ItemCard from './ItemCard'

let listStyle = {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-evenly'
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    margin: 15,
  // gridAutoRows: 20,
  gridGap: 15,

  '@media screen and (max-width: 1024px)': {
       /* start of large tablet styles */
       gridTemplateColumns: '1fr 1fr 1fr'
  },

  '@media screen and (max-width: 768px)': {
       /* start of medium tablet styles */
       gridTemplateColumns: '1fr 1fr'

  },

  '@media screen and (max-width: 480px)': {
       /* start of phone styles */
       gridTemplateColumns: '1fr'

  }
}




const ItemList = ({items}) => {
    return (<div style={listStyle}>
        { items.map(item => { return <ItemCard item={item}/> }) }
    </div>)
}

export default Radium(ItemList);
