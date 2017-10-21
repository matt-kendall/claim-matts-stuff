import React from 'react';
import Button from './Button';
import Radium from 'radium';
import styleConstants from '../styleConstants';
import StatusChip from '../components/StatusChip';
import PhotoCount from '../components/PhotoCount';
import {Link} from 'react-router-dom';

const cardStyle = {
    backgroundColor: styleConstants.colors.darkerGrey,
    borderRadius: 5,
    width: '100%',
    display: 'inline-block',
};

const imgStyle = {
    paddingBottom: '56.25%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%, 50%',
    margin: 10,
    position: 'relative'
};

const descriptionStyle = {
    margin: '18px 18px 12px',
    color: '#b2c0c1',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: 14,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
}

const ItemCard = ({item}) =>  {

    let imageSrc;
    if (item.images[0]) {
        imageSrc = {
            backgroundImage: `url("${process.env.PUBLIC_URL}/images/${item.images[0].thumbnailFilename}")`
        }
    } else {
        imageSrc = {
            backgroundImage: `url("${process.env.PUBLIC_URL}/images/no-image.png")`,
            backgroundColor: styleConstants.colors.darkGrey
        }
    }

    return (
        <Link to={`/i/${item.id}`} style={linkStyle}>
            <div style={cardStyle}>
                <div className="img" style={[imgStyle, imageSrc]}></div>
                <div style={descriptionStyle}>{item.name}</div>
                <PhotoCount count={item.images.length}/>
            </div>
        </Link>
    )
};

export default Radium(ItemCard)
