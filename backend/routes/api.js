const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const Client = require('../models/client');

const db = "mongodb+srv://sstreme:ae4GepzKyaJuUfo3@sm-cluster-mv5e5.mongodb.net/SM_Database?retryWrites=true"

mongoose.connect(db, { useNewUrlParser: true }, err => {
    if(err){
        console.error('Error!: '+err);
    }else{
        console.log('conected to mongodb');
    }
})

router.get('/', (req, res) => {
    res.send('from api route');
});

module.exports = router;
