const User = require('../../../models/User');
const jwt = require('jsonwebtoken');

// GET leaderboard
const getLeaderboard = (req, res) => {
    User.find( (err, docs) => {
        if (err) {
            res.json( {
                "status": "Error",
                "message": err
            });
        }
        if(!err) {
            res.json( {
                "status": "Success",
                "data": {
                    users: docs
                }
            });
        }

    } )
};

// register
const register = async (req, res) => {
    console.log(req.body);

    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        console.log(result);

        // token genereren
        let token = jwt.sign({
            uid: result._id,
            username: result.username
        }, "secret");

        // status en webtoken meegeven
        res.json({
            "status": "Success",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "Error"
        })
    });

    //_id, email, balance, username, salt, hash, __v
};

// login
const login = async (req, res) => {
    const user = await User.authenticate()(req.body.username, req.body.password).then(result => {

        // geen user teruggekregen
        if (!result.user) {
            return res.json({
                "status": "Error",
                "message": "Login failed"
            })
        }
        
        // token genereren
        let token = jwt.sign({
            uid: result.user._id,
            username: result.user.username
        }, "secret");

        return res.json({
            "status": "Success",
            "data": {
                "token": token
            }
        })
    }).catch(error => {
        res.json({
            "status": "Error",
            "message": error
        })
    });
};

module.exports.getLeaderboard = getLeaderboard;
module.exports.register = register;
module.exports.login = login;
