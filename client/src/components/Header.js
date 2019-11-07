import React from 'react';
import Jumbotron from './Jumbotron';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    isActiveLink(link) {
        return window.location.pathname === link;
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Google Books</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${this.isActiveLink('/') ? 'active' : ''}`}>
                                <a className="nav-link" href="/">Search</a>
                            </li>
                            <li className={`nav-item ${this.isActiveLink('/saved') ? 'active' : ''}`}>
                                <a className="nav-link" href="/saved">Saved</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Jumbotron />
            </header>
        );
    }
}

export default Header;