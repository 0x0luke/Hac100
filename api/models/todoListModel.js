'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
    productID: {
        type: Number,
        default: 0,
    },
    userid: {
        type: String
    },
    recommendedItems:{
        probability:[{
            type: Number,
            default: 0,
        }],       
    },
});

module.exports = mongoose.model('Items', ItemSchema);