import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { removeFromFavs } from "../Redux";

const Favorite = ( { favs, dispatchRemoveFromFavs } ) => (
    <div>
        <h2>You love:</h2>
        { _.map( favs, ( favImage, index ) => (
            <div className="dog-container" key={ favImage }>
                <img
                    className="dog-image"
                    alt="puppy"
                    src={ favImage }

                />
                <button
                    className="love-button"
                    onClick={ ( ) => dispatchRemoveFromFavs( index ) }
                >
                    Remove
                </button>
            </div>
        ) ) }
    </div>
);

const mapStateToProps = ( state ) => ( {
    favs: state,
} );

const mapDispatchToProps = {
    dispatchRemoveFromFavs: removeFromFavs,
};

export default connect( mapStateToProps, mapDispatchToProps )( Favorite );
