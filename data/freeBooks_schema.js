var mongoose   = require('mongoose'),
    bookSchema = new mongoose.Schema({
        
        bookName: String,
        author: String,
        freeByMonths: {
            startDate: String,
            lastDate: String
        }
    }, {collection: 'freebooks'});
    var Book = mongoose.model('Book', bookSchema);

    module.exports = Book;