var jayson = require('jayson');

var client = jayson.client.http({
    port: 4040,
    hostname: 'localhost'
});

function add(a, b, callback) {
    client.request('add', [a, b], function (err, res) {
        if (err) throw err;
        console.log(res.result);
        callback(res.result)
    });
}
module.exports = {
    add
};
