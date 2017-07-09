import React from 'react';
import Radium from 'radium';
import styleConstants from '../styleConstants';

const StatusChip = ({claimed}) => {
    let text = claimed ? 'Claimed' : 'Unclaimed';
    let styles = {
        base: {
            borderRadius: 3,
            color: 'white',
            padding: '1px 7px',
            backgroundColor: styleConstants.colors.green
        },
        claimed : {
            backgroundColor: styleConstants.colors.red
        }
    };
    return (<span style={[styles.base, claimed && styles.claimed]}>{text}</span>)
};

export default Radium(StatusChip)