import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="jumbotron text-center mb-3">
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search for and save books of interest.</p>
            </div>
        );
    }
}

export default Search;