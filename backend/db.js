const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/iNoteBook?readPreference=primary&appname=MongoDB%20C';

const connectToMongo = ()=> {
    mongoose.connect(mongoURI,()=>{
        console.log('Connect to mongodb successfully');
    })
}

module.exports = connectToMongo;