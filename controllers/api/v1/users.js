const User = require('../../../models/User');

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
    let email = req.body.email;

    const user = new User({username: username, email: email});
    await user.setPassword(password);
    await user.save().then(result => {
        res.json({
            "status": "Success"
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
        res.json({
            "status": "Success",
            "data": {
                user: result
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
