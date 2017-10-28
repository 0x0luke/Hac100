'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
    productID: {
        type: String,
        required: "Enter the name of the item",
    },
    percent:{
        type: Number,
        default: 0,
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