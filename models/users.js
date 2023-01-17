const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//유저 정보에대한 스키마 작성

const Account = new Schema({
    username: {
        type: String,
        maxlength: 30,
    },
    email: {
        type: String,
        maxlength: 30,
    },
    valid_email: {
        type: Boolean,
    },
    password: {
        type: String,
    }

})

module.exports = mongoose.model('User', Account);