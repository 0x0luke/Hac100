'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
    productID: {
        type: Number,
        default: 0,
    },
    suggested:{
        type: String,
    },
    userid: {
        type: String
    },
    recommendedItems:{
        itemID:[{
            type: String,
            default: 0,
        }],
        probability:[{
            type: Number,
            default: 0,
        }],       
    },
});

module.exports = mongoose.model('Items', ItemSchema);