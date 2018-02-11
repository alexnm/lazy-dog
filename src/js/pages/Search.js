import React from "react";
import _ from "lodash";
import Fetch from "../components/Fetch";

const Search = ( { history } ) => (
    <div>
        <h2>Search for your favorite breed:</h2>
        <Fetch url="/breeds/list">
            { ( breeds ) => (
                <div>
                    <select onChange={ ( evt ) => history.push( `/search/${ evt.target.value }` ) }>
                        { _.map( breeds, breed => (
                            <option key={ breed }>{ breed }</option>
                        ) ) }
                    </select>
                </div>
            ) }
        </Fetch>
    </div>
);

export default Search;
