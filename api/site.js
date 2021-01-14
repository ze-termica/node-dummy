
module.exports = function (app) {
    let api = {};
    let ServerUtil = require('./../util/serverUtil');
    let serverUtil = new ServerUtil(app);

    api.getUser = function (req, res) {
        console.time('Processing time');

        //TODO: salvar no ES
        console.log(serverUtil.getFormatedTime(), 'get request on /site remote ip: ', req.connection.remoteAddress);
        serverUtil.saveElasticsearchInteractionData(serverUtil.getFormatedTime(), 'get request on /site remote ip: ', req.connection.remoteAddress, 'interaction');
        serverUtil.getHttpUserData().then(users => {
            let sites = [];
            users.forEach(user => {
                if (user.website) sites.push(user.website);
            });
            console.log('Returning ', sites.length, ' site address');

            console.timeEnd('Processing time');
            res.status(200).send({ user_sites: sites });
            return;
        }).catch(err => {
            console.timeEnd('Processing time');
            res.status(500).send({ err: 'Sorry bro' });
            console.log(err);
        });
    }

    return api;
}