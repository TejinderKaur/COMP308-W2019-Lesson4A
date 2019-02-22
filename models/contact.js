let mongoose = require('mongoose');

//create a model class

let thingsSchema = mongoose.Schema({
    name: String,
    description: String,
   
},
{
    collection: "favouriteThings"
});

module.exports = mongoose.model('tejinder', thingsSchema);