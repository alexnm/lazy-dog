import React from "react";
import { connect } from "react-redux";
import { map } from "lodash/map";
import Fetch from "../components/Fetch";
import { addToFavs } from "../Redux";

const BreedDetails = ( { match, dispatchAddToFavs } ) => {
    if ( !match.params.breed ) {
        return false;
    }

    return (
        <div>
            <Fetch url={ `/breed/${ match.params.breed }/images` }>
                { ( images ) => (
                    map( images, ( image ) =>
                        (
                            <div className="dog-container" key={ image }>
                                <img
                                    className="dog-image"
                                    alt="puppy"
                                    src={ image }

                                />
                                <button
                                    className="love-button"
                                    onClick={ ( ) => dispatchAddToFavs( image ) }
                                >
                                    Love me!
                                </button>
                            </div>
                        ) )
                ) }
            </Fetch>
        </div>
    );
};

const mapDispatchToProps = {
    dispatchAddToFavs: addToFavs,
};

export default connect( null, mapDispatchToProps )( BreedDetails );
