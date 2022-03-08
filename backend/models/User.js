const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name : {type : String,
            required : true},
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        requied : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

// const user = new UserSchema
const User = mongoose.model('user',UserSchema);
User.createIndexes;
module.exports = User;