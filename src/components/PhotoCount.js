import React from 'react';
import Radium from 'radium';
import styleConstants from '../styleConstants'

let countStyle = {
  margin: '0 10px'
};

let noPhotosStyle = {
  color: styleConstants.colors.darkGrey
};

const PhotoCount = ({count}) => {
    let photos = (count === 0);
    return (<div
        style={[photos && noPhotosStyle]}><span style={countStyle}>{count}</span><i className="fa fa-picture-o"/></div>)
};

export default Radium(PhotoCount);
