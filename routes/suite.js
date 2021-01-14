module.exports = function (app) {
    let api = app.api.suite;

    app.route('/suite').get(api.getSuiteUser);
}