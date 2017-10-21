import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import StoryRouter from 'storybook-router';

import ItemCard from '../components/ItemCard';
import StatusChip from '../components/StatusChip';
import PhotoCount from '../components/PhotoCount';
import Button from '../components/Button';
import ItemList from '../components/ItemList';
import ItemDetail from '../components/ItemDetail';

let item = {
    id: 'abcdef',
    name: 'Cams (set of 6)',
    description: 'A full set of cams (sizes 3, 2, 1.5, 1, 0.5, 0). All are DMM 4CUs apart from the size 1 which is a Wild ' +
        'Country Friend. The 4CUs all have built in extending slings which is fantastic as in most placements you ' +
        ' don\'t need to waste a quickdraw to extend the cam.\n\n' +
        '' +
        'Most of these cams were purchased in 2009, but the 0.5 and 0 were purchased in 2011 I think. All have been ' +
        'subject to reasonably regular use for a few years, but appear to all be in good condition. The metal work ' +
        'is all fine and there is no visible damage on the slings. No substantial falls taken on any of these.',
    bids: [
        {
            user: 'User1',
            amount: 15.00
        }
    ],
    images: [
        {
            filename: 'IMG_20170527_171422722.jpg',
            thumbnailFilename: 'IMG_20170527_171422722-thumb.jpg'
        }, {
            filename: 'IMG_20170527_171430796.jpg',
            thumbnailFilename: 'IMG_20170527_171430796-thumb.jpg'
        }, {
            filename: 'IMG_20170527_171438997.jpg',
            thumbnailFilename: 'IMG_20170527_171438997-thumb.jpg'
        }, {
            filename: 'IMG_20170527_171442340.jpg',
            thumbnailFilename: 'IMG_20170527_171442340-thumb.jpg'
        }, {
            filename: 'IMG_20170527_171445021.jpg',
            thumbnailFilename: 'IMG_20170527_171445021-thumb.jpg'
        }, {
            filename: 'IMG_20170527_171450002.jpg',
            thumbnailFilename: 'IMG_20170527_171450002-thumb.jpg'
        }, {
            filename: 'IMG_20170527_171453115.jpg',
            thumbnailFilename: 'IMG_20170527_171453115-thumb.jpg'
        }, {
            filename: 'IMG_20170527_171456319.jpg',
            thumbnailFilename: 'IMG_20170527_171456319-thumb.jpg'
        }
    ],
};

let item2 = {
    id: 'abc2',
    name: 'Metal files (assorted)',
    description: 'Metal files of assorted size and shape. Includes a bunch of bigger ones and a bunch of baby ones for ' +
        'delicate stuff. Shapes include flat, circular, square, triangular, curved.',
    bids: [],
    images: [
        {
            filename: 'IMG_20170521_115011092.jpg',
            thumbnailFilename: 'IMG_20170521_115011092-thumb.jpg'
        }, {
            filename: 'IMG_20170521_115018718.jpg',
            thumbnailFilename: 'IMG_20170521_115018718-thumb.jpg'
        }, {
            filename: 'IMG_20170521_114956222.jpg',
            thumbnailFilename: 'IMG_20170521_114956222-thumb.jpg'
        }, {
            filename: 'IMG_20170521_115005003.jpg',
            thumbnailFilename: 'IMG_20170521_115005003-thumb.jpg'
        }
    ]
};

let itemWithNameTooLong = {
    name: 'This name is too long to fit on a smaller card',
    bids: [],
    images: [{
        filename: 'IMG_20170521_115011092.jpg',
        thumbnailFilename: 'IMG_20170521_115011092-thumb.jpg'
    }]
}

let itemWithNoImage = {
    name: 'Item has no image',
    bids: [],
    images: []
}

const items = [item, item2];

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
    .addDecorator(StoryRouter())
    .add('with landscape photo', () => {
        return (<div style={{width: 500}}><ItemCard item={item}/></div>)
    })
    .add('with portrait photo', () => {
        return (<div style={{width: 500}}><ItemCard item={item2}/></div>)
    })
    .add('with text too long for size', () => {
        return (<div style={{width: 250}}><ItemCard item={itemWithNameTooLong}/></div>)
    })
    .add('with no image', () => {
        return (<div style={{width: 500}}><ItemCard item={itemWithNoImage}/></div>)
    });

storiesOf('ItemDetail', module)
    .add('default', () => {
        return (<ItemDetail item={item}/>)
  })


storiesOf('ItemList', module)
    .add('default', () => {
        return (<ItemList items={items}/>)
    });
