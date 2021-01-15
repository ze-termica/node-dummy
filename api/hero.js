
module.exports = function (app) {
    let api = {};
    let ServerUtil = require('../util/serverUtil');
    let serverUtil = new ServerUtil(app);

    api.getReceResults = function (req, res) {
        console.time('Processing time');
        console.log(serverUtil.getFormatedTime(), 'post request on /heroes remote ip: ', req.connection.remoteAddress);

        


        console.timeEnd('Processing time');
        res.status(200).send({ x: 'yyy' });
        return;
        // }).catch(err => {
        //     console.timeEnd('Processing time');
        //     res.status(500).send({ err: 'Sorry bro' });
        //     console.log(err);
        // });
    }

    return api;
}