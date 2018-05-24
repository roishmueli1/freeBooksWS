data = require("/using json/data/book.json");

module.exports = class Free{

    getAllFree(){
        for(let i in data){
            console.log(data[i]);
        }
        return data;
    }

    getFreeBooksById(bookId){
        for(let i in data.freeByMonths){
            if(bookId == data.freeByMonths[i].id){
                console.log(data.freeByMonths[i]);
                var currentDateId =  data.freeByMonths[i];
                return currentDateId;
            }
        }
    }

    getFreeBooksByDates(startDate, lastDate){
        for(let i in data.freeByMonths){
            if((startDate == data.freeByMonths[i].startDate) && (lastDate == data.freeByMonths[i].lastDate)){
                console.log(data.freeByMonths[i]);
                var currentBookByDates = data.freeByMonths[i];
                return currentBookByDates;
            }
        }
    }
}