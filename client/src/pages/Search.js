import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const baseURL = (process.env.NODE_ENV === "production") ? '/' : 'http://localhost:3001/';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: true,
            books: [],
        };

        this.searchForBooks = this.searchForBooks.bind(this);
        this.updateSearchQuery = this.updateSearchQuery.bind(this);
    }

    searchForBooks(evt) {
        evt.preventDefault();
        this.setState({ isSearching: true });
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query.replace(' ', '+')}`)
            .then(response => {
                this.setState({
                    isSearching: false,
                    books: response.data.items
                });
            })
    }

    saveBook(book) {
        axios.post(`${baseURL}api/books`, {
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.imageLinks.thumbnail,
            link: book.previewLink
        })
    }

    updateSearchQuery(evt) {
        this.setState({
            query: evt.target.value
        });
    }


    render() {
        return (
            <div>
                <Header />
                <div className="pt-5 pb-5" style={{ 'backgroundColor': '#e9ecef' }}>
                    <div className="container">
                        <h2>Book Search</h2>
                        <form className="d-flex" onSubmit={this.searchForBooks}>
                            <input className="form-control mr-3" id="searchQuery" type="text" onChange={this.updateSearchQuery} />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                {
                    !this.state.isSearching &&
                    <div className="">
                        {
                            this.state.books &&
                            this.state.books.map(book => {
                                return (
                                    <div className="mt-3 pt-5 pb-5" style={{ 'backgroundColor': '#e9ecef' }} key={book.id}>
                                        <div className="container">
                                            <div className="row no-gutters mb-3" style={{ 'alignItems': 'flex-start' }}>
                                                <div className="d-flex flex-column">
                                                    <h3>{book.volumeInfo.title}</h3>
                                                    <small className="text-secondary font-italic">Written By: {book.volumeInfo.authors.join(', ')}</small>
                                                </div>
                                                <a href={book.volumeInfo.previewLink} className="btn btn-secondary ml-auto">View</a>
                                                <button className="btn btn-primary ml-2" onClick={() => this.saveBook(book.volumeInfo)}>Save</button>
                                            </div>
                                            <p>{book.volumeInfo.description}</p>
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

export default Search;