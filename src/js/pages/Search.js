import React from "react";
import { map } from "lodash/map";
import Fetch from "../components/Fetch";

const Search = ( { history } ) => (
    <div>
        <h2>Search for your favorite breed:</h2>
        <Fetch url="/breeds/list">
            { ( breeds ) => (
                <div>
                    <select onChange={ ( evt ) => history.push( `/search/${ evt.target.value }` ) }>
                        { map( breeds, breed => (
                            <option key={ breed }>{ breed }</option>
                        ) ) }
                    </select>
                </div>
            ) }
        </Fetch>
    </div>
);

export default Search;
