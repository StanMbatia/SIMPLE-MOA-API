import express from "express";
const app = express();
import winston from "winston";
import expressWinston from "express-winston";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";


import logger from "./loggers.js";
import bagsRoute from "./routes/bags.routes.js";
import trucksRoute from "./routes/trucks.routes.js";
import AuthRoute from "./routes/auth.js";
import config from "./config.env.js";
import "./models/user.auth.js";
import "./passport.js"; //Initialize passport Configuration

// middlewares
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize()); // Initialize Passport


// Routes
app.use('/api/bags', bagsRoute);
app.use('/api/trucks', trucksRoute);
app.use('/api/auth', AuthRoute);

app.get('/', (req, res) => {
    res.send('Hello from the MOA');
});

//Connection to the MongoDB
mongoose.connect("mongodb+srv://stanmbatia19:Wisefool1@moadb.6ejwz8c.mongodb.net/?retryWrites=true&w=majority&appName=MOADB")
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((error) => {
        logger.error('Connection failed', error);
        process.exit();
    });

//Error Handling Middleware
app.use((req, res, next) => {
    logger.error('Unhandled error: %o', error);
    res.status(404).send({ message: 'Not Found' });
});

app.use((error, req, res, next) => {
    logger.error('An error occurred', error);
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message || 'An error occurred'
        }
    });
});

//Starting the Server
if (process.env.NODE_ENV || 'test') {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
};

export default app;