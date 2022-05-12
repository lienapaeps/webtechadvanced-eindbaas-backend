const Primus = require("primus");
const { PrimusError } = require("primus/errors");

let go = (server) => {
    let primus = new Primus(server, /*options*/);

    primus.on('connection', (spark) => {
        console.log("🔥🔥🔥");
        spark.on('data', (data) => {
            console.log(data);
            primus.write(data);
        });
    });
};

module.exports.go = go;