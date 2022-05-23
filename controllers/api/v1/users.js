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

// signup
const register = async (req, res) => {
    console.log(req.body);

    let username = req.body.username;
    let password = req.body.password;

    const user = new User({username: username});
    await user.setPassword(password);
    await user.save().then(result => {
        result.json({
            "status": "Success"
        })
    }).catch(error => {
        res.json({
            "status": "Error"
        })
    });
};

module.exports.getLeaderboard = getLeaderboard;
module.exports.register = register;