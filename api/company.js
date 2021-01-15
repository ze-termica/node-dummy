
module.exports = function (app) {
    let api = {};
    let ServerUtil = require('./../util/serverUtil');
    let serverUtil = new ServerUtil(app);

    api.getCompanyInfo = function (req, res) {
        console.time('Processing time');

        console.log(serverUtil.getFormatedTime(), 'get request on /company remote ip: ', req.connection.remoteAddress);
        // serverUtil.saveElasticsearchInteractionData(serverUtil.getFormatedTime(), 'get request on /company remote ip: ', req.connection.remoteAddress, 'interaction');
        serverUtil.getHttpUserData().then(users => {
            let usersInfo = [];
            users.forEach(user => {
                let obj = {};
                obj['name'] = user.name ?  user.name : 'NA'
                obj['email'] = user.email ? user.email : 'NA'
                obj['company'] = user.company ? user.company : 'NA';

                usersInfo.push(obj);
            });

            usersInfo.sort(function(a, b){
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            });

            console.log('Returning ', usersInfo.length, ' user\'s company info');

            console.timeEnd('Processing time');
            res.status(200).send({ users: usersInfo });
            return;
        }).catch(err => {
            console.timeEnd('Processing time');
            res.status(500).send({ err: 'Sorry bro' });
            console.log(err);
        });
    }

    return api;
}