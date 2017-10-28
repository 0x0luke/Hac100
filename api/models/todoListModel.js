'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
    name: {
        type: String,
        required: "Enter the name of the item",
    },
    Created_date:{
        type: Date,
        default: Date.now,
    },
    status:{
        type:[{
            type: String,
            enum:['bought', 'notbought']

        }],
        default:['notbought']
    }


});

module.exports = mongoose.model('Items', ItemSchema);