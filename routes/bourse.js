/**
 * Created by ayoub on 11/27/2016.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
