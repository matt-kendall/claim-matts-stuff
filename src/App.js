import React, { Component } from "react";
import logo from "./logo.svg";
import AppHeader from './components/AppHeader';
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import ItemCard from "./components/ItemCard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    componentDidMount() {
        fetch("/list_all_items.cgi")
            .then(res => res.json())
            .then(items => this.setState({ items }));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <AppHeader/>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    {this.state.items.length && (
                        <div>
                            <Route
                                exact={true}
                                path="/"
                                render={() => (
                                    <ItemList items={this.state.items} />
                                )}
                            />
                            <Route
                                path="/i/:itemId"
                                render={({ match }) => (
                                    <ItemDetail
                                        item={this.state.items.find(
                                            i => i.id === match.params.itemId
                                        )}
                                    />
                                )}
                            />
                        </div>
                    )}
                </div>
            </Router>
        );
    }
}

export default App;
