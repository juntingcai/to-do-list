const dbConfig = require('../config/db.config');
const { Sequelize, DataTypes } = require('sequelize');
const dbhandler = {};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.pool.idle
    }
});
sequelize
.authenticate()
.then(function(err) {
    console.log('Connection has been established successfully.');
})
.catch(function (err) {
    console.log('Unable to connect to the database:', err);
});

dbhandler.sequelize = sequelize;

//dbhandler.sync();
const tables = {};

var Lists = sequelize.define('lists', {
    listid: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,//不允许为null
    },
    
});

var Items = sequelize.define('items', {
    itemid: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
    },
    listid: {
        type: Sequelize.INTEGER,
        allowNull: false,//不允许为null
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,//不允许为null
    },   
    complete: Sequelize.BOOLEAN
});


Lists.hasMany(Items);
Items.belongsTo(Lists);
sequelize.sync();
module.exports = {Lists, Items};


