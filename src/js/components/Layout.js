import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Search from "../pages/Search";
import { simpleGreet } from "../Helpers";
import BreedDetails from "../pages/BreedDetails";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: simpleGreet( "Junior" ),
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>{ this.state.title }</h1>
                    <header>
                        <Link className="navlink" to="/">Home</Link>
                        <Link className="navlink" to="/search">Breed Search</Link>
                        <Link className="navlink" to="/favs">Favorite Puppies</Link>
                    </header>

                    <Route path="/" exact component={ Home } />
                    <Route path="/search" component={ Search } />
                    <Route path="/search/:breed" component={ BreedDetails } />
                    <Route path="/favs" exact component={ Favorite } />
                </div>
            </BrowserRouter>
        );
    }
}
