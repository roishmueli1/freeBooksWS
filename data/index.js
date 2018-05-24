var consts      = require('./consts'),
    mongoose    = require('mongoose'),
    freeBook      = require('./freeBooks_schema');

module.exports = class Free{

    getAllFree(req, res) {
        mongoose.connect(consts.MLAB_KEY)
        .then(
            () => {
                freeBook.find({},
                    (err, book) => {
                        if (err) console.log(`query error: ${err}`);
                        console.log(book);  
                        res.status(200).json(book);
                        mongoose.disconnect();
                    });        
            },
            err => {
                console.log(`connection error: ${err}`);
            }
        );
    }

    getFreeBooksByName(req, res) {
        var book_name = req.body.book_name;
        mongoose.connect(consts.MLAB_KEY)
        .then(
            () => {
                freeBook.find({bookName:{$eq:book_name}},
                    (err, book) => {
                        if (err) console.log(`query error: ${err}`);
                        console.log(book);  
                        res.status(200).json(book);
                        mongoose.disconnect();
                    });        
            },
            err => {
                console.log(`connection error: ${err}`);
            }
        );
    }

    getFreeBooksByDates(req, res){
        var sd = req.body.startDate;
        var ld = req.body.lastDate;
        console.log(sd);
        mongoose.connect(consts.MLAB_KEY)
        .then(
            () => {
                freeBook.find({freeByMonths:{startDate: sd, lastDate: ld}},
                    (err, book) => {
                        if (err) console.log(`query error: ${err}`);
                        console.log(book);  
                        res.status(200).json(book);
                        mongoose.disconnect();
                    });        
            },
            err => {
                console.log(`connection error: ${err}`);
            }
        );
    }
}