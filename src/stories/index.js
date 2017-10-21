import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import StoryRouter from 'storybook-router';
import {StyleRoot} from 'radium';

import ItemCard from '../components/ItemCard';
import StatusChip from '../components/StatusChip';
import PhotoCount from '../components/PhotoCount';
import Button from '../components/Button';
import ItemList from '../components/ItemList';
import ItemDetail from '../components/ItemDetail';

import {item, item2, items, itemWithNameTooLong, itemWithNoImage} from './sampleData';


// We need to wrap components in a StyleRoot to use Radium fully.
const styleRootDecorator = (storyFn) => (
  <StyleRoot>
      { storyFn() }
  </StyleRoot>
);
addDecorator(styleRootDecorator);
// This allows us to use routing in Storybook stories.
addDecorator(StoryRouter())

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
    .add('with items', () => {
        return (<ItemList items={Array(20).fill(item)}/>)
    });
