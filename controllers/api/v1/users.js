const User = require('../../../models/user');

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
}

// signup
const register = (req, res) => {
    //username, password uit request halen
    //bycrypt encrypt
    //databank
    
}
module.exports.getLeaderboard = getLeaderboard;
module.exports.register = register;