import React from "react";
import axios from "axios";

const baseUrl = "https://dog.ceo/api";

class Fetch extends React.Component {
    constructor() {
        super();
        this.state = {
            content: "",
        };
    }

    componentWillMount() {
        this.setState( {
            content: (
                <div>Loading...</div>
            ),
        } );
        axios.get( `${ baseUrl }${ this.props.url }` )
            .then(
                res => this.setState( { content: this.props.children( res.data.message ) } ),
                ( ) => this.setState( { content: ( <div>Error fetching content</div> ) } ),
            );
    }

    componentWillReceiveProps( nextProps ) {
        if ( this.props.url !== nextProps.url ) {
            this.setState( {
                content: (
                    <div>Loading...</div>
                ),
            } );
            axios.get( `${ baseUrl }${ nextProps.url }` )
                .then(
                    res => this.setState( { content: this.props.children( res.data.message ) } ),
                    ( ) => this.setState( { content: ( <div>Error fetching content</div> ) } ),
                );
        }
    }

    render() {
        return this.state.content;
    }
}

export default Fetch;
