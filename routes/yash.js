var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
    res.render('members/yash',{title:'My Brother is my BackBorn'})
});

module.exports = router;