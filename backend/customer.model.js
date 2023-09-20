module.exports = (sequelize, Sequelize) => {
    const customers = sequelize.define('customer', {

        Exp: {
            type: Sequelize.INTEGER
        },
        Description: {
            type: Sequelize.STRING,
            // primaryKey:true
        },
        BelongsTo: {
            type: Sequelize.STRING,

        },
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }

    });
    return customers
}