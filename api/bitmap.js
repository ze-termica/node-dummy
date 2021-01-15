
module.exports = function (app) {
    let api = {};
    let ServerUtil = require('../util/serverUtil');
    let serverUtil = new ServerUtil(app);

    api.getBitmapElementNumbers = function (req, res) {
        console.time('Processing time');
        console.log(serverUtil.getFormatedTime(), 'post request on /bitmap remote ip: ', req.connection.remoteAddress);
        console.log(req.body);

        // lógica da API aqui

        res.status(200).send({ x: 'xxx' });
        return;
        // }).catch(err => {
        //     console.timeEnd('Processing time');
        //     res.status(500).send({ err: 'Sorry bro' });
        //     console.log(err);
        // });
    }

    api.sum = function(a, b){
        console.log('run sum');
        return a + b;
    }

    return api;
}