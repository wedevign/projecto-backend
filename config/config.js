module.exports = {
    // Port of the backend. NOTE: Config entry will be ignored when environment variable is set with the name: 'PORT'.
    PORT: "3001",

    SESSION_EXPIRATION_TIME: 3600, // In seconds

    // Mysql credentials
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "projectodb",
    dialect: "mysql"
}