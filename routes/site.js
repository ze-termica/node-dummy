module.exports = function (app) {
    let api = app.api.site;

    app.route('/site').get(api.getUser);
}