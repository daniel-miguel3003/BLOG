const Sequelize = require('sequelize');

const sequelize = new Sequelize('projeto_faculdade_bd', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})
;

module.exports = {
    sequelize : sequelize,
    Sequelize : Sequelize
}