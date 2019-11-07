import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const baseURL = (process.env.NODE_ENV === "production") ? '/' : 'http://localhost:3001/';

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };

        this.deleteBook = this.deleteBook.bind(this);
    }

    componentDidMount() {
        axios.get(`${baseURL}api/books`)
            .then(response => {
                this.setState({ books: response.data })
            })
    }

    deleteBook(book) {
        axios.delete(`${baseURL}api/books/${book._id}`)
            .then(() => {
                this.setState({
                    books: this.state.books.filter(b => b._id !== book._id)
                })
            })
    }

    render() {
        return (
            <div>
                <Header />
                {
                    !this.state.isSearching &&
                    <div className="">
                        {
                            this.state.books &&
                            this.state.books.map(book => {
                                return (
                                    <div className="mt-3 pt-5 pb-5" style={{ 'backgroundColor': '#e9ecef' }} key={book._id}>
                                        <div className="container">
                                            <div className="row no-gutters mb-3" style={{ 'alignItems': 'flex-start' }}>
                                                <div className="d-flex flex-column">
                                                    <h3>{book.title}</h3>
                                                    <small className="text-secondary font-italic">Written By: {book.authors.join(', ')}</small>
                                                </div>
                                                <a href={book.link} className="btn btn-secondary ml-auto">View</a>
                                                <button className="btn btn-primary ml-2" onClick={() => this.deleteBook(book)}>Delete</button>
                                            </div>
                                            <p>{book.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <Footer />
            </div>
        );
    }
}

export default Saved;