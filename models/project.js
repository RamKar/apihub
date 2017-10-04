// app/models/user.js
// load the things we need
var mongoose = 'mongoose';
require([mongoose], function(result){
    mongoose = result;
});

var d =new Date();
// define the schema for our user model
var projectSchema = mongoose.Schema({

        name        : String,
        visibility     : {
            type : String,
            enum : ['private','public']
        },
        state          : {
            type : String,
            enum : ['published','unpublished'],
            default : 'unpublished'
        },
        role           : String,
        owner          : String,
        email          : String,
        date           : {
            type : String,
            default : d.toDateString()
        }

});


module.exports = mongoose.model('Project', projectSchema);
