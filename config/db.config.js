module.exports = {
    HOST: "localhost",
    PORT: 5432,
    USER: "postgres",
    PASSWORD: "cjt5526620",
    DB: "todolist",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};