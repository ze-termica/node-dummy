module.exports = function (app) {
    let api = app.api.company;

    app.route('/company').get(api.getCompanyInfo);
}