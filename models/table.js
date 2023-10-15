const connect = require('./Connect')

const con = connect.sequelize.define('projeto_faculdade_bd',{
    nome: {
        type: connect.Sequelize.STRING
    },
    email: {
        type: connect.Sequelize.STRING
    },
    msg: {
        type: connect.Sequelize.STRING
    }
});
    
//con.sync({force: true})

module.exports = con
