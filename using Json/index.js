var express     = require('express'),
    data        = require("./data/books.json"),
    app         = express(),
    bodyParser  = require('body-parser'),
    free        = require('./functions'),
    port        = process.env.PORT || 3000;

app.use(bodyParser.json()); //parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));

var f = new free();

app.all('*', (req, res, next) => {
    //console.log('111');
    next();
})
app.get('/getAllFree/', (req, res) => {
        var bookList = f.getAllFree();
        res.json(bookList);
});

app.post('/getFreeBooksByName/:book_name', 
    (req, res) => {
        var freeByName = f.getFreeBooksByName(req.params.book_name);
        res.json(freeByName);
});
app.put('/getFreeBooksByDates/:startDate/:lastDate', 
    (req, res) => {

        var bookById = [];
        //console.log(bookById);
        bookById = f.getFreeBooksByDates(req.params.startDate, req.params.lastDate);
        //console.log(bookById);
        for(let i in bookById){
            //console.log("xxx");
            console.log(bookById[i]);    
        }
        
});
app.listen(port,
    () => {
        console.log(`listening on port ${port}`);       
});
     