import React from "react";
import Fetch from "../components/Fetch";

const Home = ( ) => (
    <div>
        <h2>You love:</h2>
        <Fetch url="/breeds/image/random">
            { ( imageSrc ) => (
                <img className="home-image" src={ imageSrc } alt="puppy" />
            ) }
        </Fetch>
    </div>
);

export default Home;
