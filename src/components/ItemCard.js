import React from 'react';
import Button from './Button';
import styleConstants from '../styleConstants';
import StatusChip from '../components/StatusChip';
import PhotoCount from '../components/PhotoCount';

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

const detailsBarStyle={
    display: 'flex',
    justifyContent: 'space-between'
};

const descriptionStyle = {
    padding: '0 25px'
};

const ItemCard = ({item}) =>  {
    return (
        <div style={cardStyle}>
            <img style={imgStyle}
                 src={process.env.PUBLIC_URL + '/images/' + item.images[0].thumbnailFilename}
                 alt={item.images[0].thumbnailFilename}/>
            <div style={descriptionStyle}>
                <h3>{item.name}</h3>
                <div style={detailsBarStyle}>
                    <PhotoCount count={item.images.length}/>
                    <Button>Claim it</Button>
                    <StatusChip claimed={item.bids.length > 0}/>
                </div>
            </div>
        </div>
    )
};

export default ItemCard