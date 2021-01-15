module.exports = function (app) {
    let api = app.api.hero;

    app.route('/heroes').get(api.getReceResults);
}