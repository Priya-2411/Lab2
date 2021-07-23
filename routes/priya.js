var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
    res.render('members/priya',{title:'OfCourse it me!!'})
});3

module.exports = router;