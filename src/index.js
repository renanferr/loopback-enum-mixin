const enumMixin = require('./enum-mixin')

module.exports = function (app) {
    app.loopback.modelBuilder.mixins.define('Enum', enumMixin)
}