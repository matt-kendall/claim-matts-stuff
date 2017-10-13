import React from "react";
import Radium from "radium";
import styleConstants from "../styleConstants";

let styles = {
    containerStyle: {
        margin: "0 10px",
        color: styleConstants.colors.mediumGrey
    },
    countStyle: {
        marginRight: 10
    },
    noPhotosStyle: {
        color: styleConstants.colors.darkGrey
    }
};

const PhotoCount = ({ count }) => {
    let photos = count === 0;
    return (
        <div style={[styles.containerStyle, photos && styles.noPhotosStyle]}>
            <span style={styles.countStyle}>{count}</span>
            <i className="fa fa-picture-o" />
        </div>
    );
};

export default Radium(PhotoCount);
