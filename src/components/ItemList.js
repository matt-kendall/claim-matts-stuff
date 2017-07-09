import React, { Component } from 'react';
import ItemCard from './ItemCard'

class ItemList extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch('/list_all_items.cgi')
            .then(res => res.json())
            .then(items => this.setState({ items }));
    }

    render() {
        return <div>
            { this.state.items.map(item => { return <ItemCard item={item}/> }) }
        </div>
    }
}

export default ItemList