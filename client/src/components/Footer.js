import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer className="text-center pt-5 pb-5">
                &copy; {(new Date()).getFullYear()} Jenny Vossman
            </footer>
        );
    }
}

export default Footer;