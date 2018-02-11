import React from "react";
import ReactDOM from "react-dom";
import "core-js";
import { Provider } from "react-redux";
import store from "./Redux";

import Layout from "./components/Layout";

const app = document.getElementById( "app" );
ReactDOM.render(
    <Provider store={ store }>
        <Layout />
    </Provider>,
    app,
);
