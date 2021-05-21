const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

/**
 * @route Post api/users/register
 * @desc Rgister the User
 * @access Public
 */
router.post('/register', (req, res) => {
    let { 
        name,
        username,
        email,
        password,
        confirm_password,
        roll
    } = req.body
    if(password !== confirm_password){
        return res.status(400).json({
            msg: "Password or Username do not match."
        });
    }
    //Check email
    User.findOne({
        username: username
    }).then(user => {
        if(user){
            return res.status(400).json({
                msg: "Username is already taken."
            });
            
        }
    });
    //Check for the email
    User.findOne({
        email: email
    }).then(user => {
        if(user){
            return res.status(400).json({
                msg: "Email is already taken."
            });
            
        }
    });
    //User can be registered
    let newUser  = new User({
        name,
        username,
        password,
        email,
        roll
    });
//hash password

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now registered"
                });
            });
        });
    });
});


/**
 * @route Post api/users/login
 * @desc Signing in the User
 * @access Public
 */
router.post('/login', (req, res) => {
    User.findOne({ 
        username: req.body.username
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "Username or Password is not found.",
                success: false
            });
        }
        // If there is user we are now going to compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                    //User's password is correct and we need to send the JSON Token for that user
                    const payload = {
                        _id: user._id,
                        username: user.username,
                        name: user.name,
                        email: user.email,
                        roll: user.roll
                    }
                    jwt.sign(payload, key, {
                        expiresIn: 604800
                    }, (err, token) => {
                        res.status(200).json({
                            success: true,
                            user: user,
                            token: `Bearer ${token}`,
                            msg: "You are now logged in."
                        });
                    })
            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    sucess: false
                });
            }
        })
    });
});

/**
 * @route Post api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

module.exports = router;