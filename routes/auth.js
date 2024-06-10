// routes/auth.js
import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/user.auth.js";
import config from "../config.js"
import logger from "../loggers.js"

export const router = express.Router();


// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    logger.error('Error registering user: %o', error);
    res.status(400).send({ message: 'Error registering user', error });
  }
});

// Login route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).send({
        message: 'Invalid email or password',
        user: user
      });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, config.secret, { expiresIn: '1h' });
    res.send({ token });
  })(req, res, next);
});

export default router;