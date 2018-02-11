import { createStore } from "redux";

function reducer( state = [], action ) {
    switch ( action.type ) {
        case "ADD_TO_FAVS": return [ ...state, action.payload ];
        case "REMOVE_FROM_FAVS": return [ ...state.slice( 0, action.payload ), ...state.slice( action.payload + 1 ) ];
        default: return state;
    }
}

export function addToFavs( imgSrc ) {
    return {
        type: "ADD_TO_FAVS",
        payload: imgSrc,
    };
}

export function removeFromFavs( index ) {
    return {
        type: "REMOVE_FROM_FAVS",
        payload: index,
    };
}

export default createStore( reducer );
