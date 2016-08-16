var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '4618',
    database: 'sakila',
});

connection.connect(function (err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect] succeed!');
});


var userGetSql = 'SELECT * FROM actor';

var resjson;

connection.query(userGetSql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] -', err.message);
        return;
    }

    resjson = result;

});

//关闭connection
connection.end(function (err) {

    if (err) {
        return;
    }
    console.log('[connection end] succeed!');
});


/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.send(resjson);
    res.render('mysql', {result: res.json(resjson)});
});


module.exports = router;

