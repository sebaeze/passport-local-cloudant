/*
*   wrapper for Passportjs using cloudant
*   This wrapper returns an Express.js's router
*/
const express           = require('express')     ;
const bodyParser        = require('body-parser') ;
var router              = express.Router()   ;
//
/*
*
*/
//app.use(bodyParser.urlencoded({ extended: true }));
//
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
                            function(req, res) {
                                res.redirect('/');
                            }
            ) ;
//
module.exports = router ;
//