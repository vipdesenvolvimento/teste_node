module.exports = app => {
    const controller = app.controller.sva;
    app.route('/listsva/:contrato').get(controller.getSva);
}