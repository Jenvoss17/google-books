var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String
    },
    authors: {
        type: []
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', BookSchema);