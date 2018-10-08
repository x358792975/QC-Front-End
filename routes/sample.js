var express = require('express');
var router = express.Router();

exports.index = function(req, res){
    res.render('sample', {title: 'Test'});
};

exports.add_sample = function(req,res){
};