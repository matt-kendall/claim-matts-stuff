import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import ItemCard from '../components/ItemCard';
import StatusChip from '../components/StatusChip';
import PhotoCount from '../components/PhotoCount';
import Button from '../components/Button';

storiesOf('Button', module)
    .add('primary', () => (
        <Button primary>Button text</Button>
    ))
    .add('secondary', () => (
        <Button>Button text</Button>
    ));

storiesOf('StatusChip', module)
    .add('unclaimed', () => (
        <StatusChip/>
    ))
    .add('claimed', () => (
        <StatusChip claimed="true"/>
    ));

storiesOf('PhotoCount', module)
    .add('with no photos', () => (
        <PhotoCount count={0}/>
    ))
    .add('with photos', () => (
        <PhotoCount count={99}/>
    ));

storiesOf('ItemCard', module)
    .add('with data', () => {
        let item = {
            name: 'Bosch Power Drill',
            description: 'Cordless 18V Bosch drill. Hammer modes and various torque settings. Includes two batteries and a ' +
            'second grip. Variable speed control (on the trigger) doesn\t work anymore so only goes at full speed!',
            dateAdded: '2017-07-20 19:07:20',
            bids: [],
            images: [],
            thumbnail: 'car1-thumb.jpg'

        };
        return (<ItemCard item={item}/>)
    });
