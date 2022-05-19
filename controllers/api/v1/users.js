const User = require('../../../models/user');


const register = (req, res) => {
    let user = new User();
    user.id = req.body.id;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.balance = req.body.balance;

    user.save((err, doc) => {
        if (!err) {
            res.json( {
                "status": "Success",
                "data": {
                    "transfer": doc
                }
            });
        } else if (err) {
            res.json( {
                "status": "Error",
                "message": "Error while creating user"
            });
        }
    } );

    // console.log(req.body);
    // res.send("POSTING new message");
}


// GET leaderboard
const getLeaderboard = (req, res) => {
    const response = {
        status: "success",
        data: {
            users: []
        }
    }
    res.json(response);

}

module.exports.register = register;
module.exports.getLeaderboard = getLeaderboard;