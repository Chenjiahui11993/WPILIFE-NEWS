var client = require('./rpc_client');

// invoke add
client.add(1, 2, function(res) {
     console.log(res);
});