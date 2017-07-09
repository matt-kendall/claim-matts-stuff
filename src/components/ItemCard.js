import React from 'react';
import Button from './Button'
import styleConstants from '../styleConstants'
import StatusChip from '../components/StatusChip'

const cardStyle = {
    border: '1px solid',
    borderColor: styleConstants.colors.lightGrey,
    borderRadius: 5,
    maxWidth: 500,
};

const imgStyle = {
    width: '100%',
    borderBottom: '1px solid',
    borderColor: styleConstants.colors.lightGrey
};

const descriptionStyle = {
  padding: '0 25px'
};

const ItemCard = ({item}) =>  {
    return (
        <div style={cardStyle}>
            <img style={imgStyle} src={process.env.PUBLIC_URL + '/images/' + item.thumbnail}/>
            <div style={descriptionStyle}>
                <h3>{item.name}</h3>
                {/*<p>{item.description}</p>*/}
                <Button>Claim it</Button>
                <StatusChip claimed={item.bids.length > 0}/>
            </div>
        </div>
    )
};

export default ItemCard