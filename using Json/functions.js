data = require("./data/books.json");

module.exports = class Free{

    getAllFree(){
        for(let i in data){
            console.log(data[i]);
        }
        return data;
    }

    getFreeBooksByName(book_name){
        for(let i in data){
            if(book_name == data[i].bookName){
                console.log(data[i]);
                var currentName =  data[i];
                return currentName;
            }
        }
    }
    getFreeBooksByDates(startDate, lastDate){
        for(let i in data){
            if((startDate == data[i].freeByMonths.startDate) && (lastDate == data[i].freeByMonths.lastDate)){
                console.log(data[i]);
                continue;
                return data[i];
                console.log(data[i]);
            }
        }
    }
}