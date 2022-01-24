const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-user' , ( req, res , next) => {
    console.log('2 miileware');
    res.sendFile(path.join( rootDir, 'views' , 'admin.html'))

});
router.post('/users' , ( req, res , next) => {
   console.log(req.body);
res.redirect('/')
});
module.exports = router;