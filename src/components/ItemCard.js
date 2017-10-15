import React from 'react';
import Button from './Button';
import Radium from 'radium';
import styleConstants from '../styleConstants';
import StatusChip from '../components/StatusChip';
import PhotoCount from '../components/PhotoCount';
import {Link} from 'react-router-dom';

const cardStyle = {
    backgroundColor: '#2F2F36', // TODO add to constants
    borderRadius: 5,
    padding: 8,
    maxWidth: 400,
    display: 'inline-block'
};

const imgStyle = {
    width: 400,
    height: 220,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%, 50%'
    // borderBottom: '1px solid',
    // borderColor: styleConstants.colors.lightGrey
};  

const descriptionStyle = {
    padding: '10px 12px',
    color: '#b2c0c1',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: 14
};

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
}

const countStyle = {

}

const ItemCard = ({item}) =>  {

    const imageSrc = {
        backgroundImage: `url("${process.env.PUBLIC_URL}/images/${item.images[0].thumbnailFilename}")`
    }

    return (
        <Link to={`/i/${item.id}`} style={linkStyle}>
            <div style={cardStyle}>
                <div className="img" style={[imgStyle, imageSrc]}></div>
                <div style={descriptionStyle}>
                    <span>{item.name}</span>
                </div>
                <div style={countStyle}>
                    <PhotoCount count={item.images.length}/>
                </div>
            </div>
        </Link>
    )
};

export default Radium(ItemCard)
