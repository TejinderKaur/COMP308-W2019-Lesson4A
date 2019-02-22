let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

//create areference to db schema
let contact = require('../models/contact');

/* GET contact list page - READ operation */
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        if(err){
            return console.error(err);
        }
        else{
            console.log(contactList);
            /*
            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
            */

        }
    });
});

module.exports = router;