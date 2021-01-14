
module.exports = function (app) {
    let api = {};
    let ServerUtil = require('./../util/serverUtil');
    let serverUtil = new ServerUtil(app);

    api.getSuiteUser = function (req, res) {
        console.time('Processing time');

        //TODO: salvar no ES
        console.log(serverUtil.getFormatedTime(), 'get request on /suite remote ip: ', req.connection.remoteAddress);
        serverUtil.saveElasticsearchInteractionData(serverUtil.getFormatedTime(), 'get request on /suite remote ip: ', req.connection.remoteAddress, 'interaction');
        serverUtil.getHttpUserData().then(users => {
            let suiteUsers = [];
            users.forEach(user => {
                if (user.address && user.address.suite){
                    if (user.address.suite.toLowerCase().indexOf('suite') != -1) suiteUsers.push(user);
                }
            });
            console.log('Returning ', suiteUsers.length, ' site address');

            console.timeEnd('Processing time');
            res.status(200).send({ suite_users: suiteUsers });
            return;
        }).catch(err => {
            console.timeEnd('Processing time');
            res.status(500).send({ err: 'Sorry bro' });
            console.log(err);
        });
    }

    return api;
}