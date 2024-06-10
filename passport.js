import passport from "passport";
import LocalStrategy from "passport-local";
import { ExtractJwt, Strategy } from 'passport-jwt';
import mongoose from "mongoose";
const User = mongoose.model("User");
import config from "./config.js";

//Local Strategy for User Login
passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'Incorrect Email.' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return done(null, false, { message: 'Incorrect Password.' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));
console.log(config)

//Jwt Strategy for Token Verification
passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKeyProvider: config.secret
}, async (jwtPayload, done) => {
  try {
    const user = await user.findbyId(jwtPayload.userId);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));
