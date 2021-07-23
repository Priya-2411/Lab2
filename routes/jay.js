var express = require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
    res.render('members/jay',{title:'My Dad My Hero'})
});

module.exports = router;