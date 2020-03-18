const express = require('express');
const app = express();
const Sequelize = require('sequelize');

const config = require("./config/config");
const db = require('./config/database');
const util = require('./utilities');

const PORT = config.PORT || process.env.PORT;

// Test DB
db.authenticate()
    .then(() => util.log("Database connected."))
    .catch(err => util.log("error: " + err));

// Import Routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

// Middlewares
app.use(express.json());

// Route middlewares
app.use("/api/user", authRoute);
app.use("/api/users", usersRoute);

// App listening
app.listen(PORT, () => util.log(`Projecto backend server is running on: http://localhost:${PORT}`));