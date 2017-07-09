import React from 'react';
import Radium from 'radium';
import Color from 'color';

import styleConstants from '../styleConstants'

const Button = ({text, primary}) => {

    let styles = {
        base: {
            border: '1px solid',
            backgroundColor: styleConstants.colors.reversePrimary,
            borderColor: styleConstants.colors.primary,
            color: styleConstants.colors.primary,
            cursor: 'pointer',
            borderRadius: 3,
            padding:  5,
            ':hover': {
                backgroundColor: Color(styleConstants.colors.reversePrimary).darken(0.075).string()
            }
        },
        primary: {
            backgroundColor: styleConstants.colors.primary,
            borderColor: styleConstants.colors.reversePrimary,
            color: styleConstants.colors.reversePrimary,
            ':hover': {
                backgroundColor: Color(styleConstants.colors.primary).darken(0.075).string()
            }
        },

    };

    return (<button style={[styles.base, primary && styles.primary]}>{text}</button>)
};

export default Radium(Button)