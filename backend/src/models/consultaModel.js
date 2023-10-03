const connection = require('./connection');

const getAll = async () => {
    try {
        await connection.connect();
        const request = new connection.sql.Request();
        const produtos = await request.query("SELECT B1_COD, B1_DESC FROM SB1010 WHERE D_E_L_E_T_ = ' ' AND B1_TIPO = 'PA'");
        console.log(produtos.rowsAffected);
        return {
            resultado: produtos.recordset,
            rowsAffected:produtos.rowsAffected
        };
    } catch (err) {
        console.log('Erro: '+ err.message);
        return {
            erro: err.message
        };
    }
};

module.exports = {
    getAll
};