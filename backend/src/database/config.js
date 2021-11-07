module.exports = {
    database: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'dashboard_webapp',
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },

    auth: {
        secret: "bezkoderAuthor-secret-key"
    }
}