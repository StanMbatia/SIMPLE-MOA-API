import passport from "passport";


//Middleware to authenticate and authorize token
export const authMiddleware = passport.authenticate('jwt', { session: false }, (err, user, info) => {
  if (err) {
    console.log('Error during authentcation', err)
  }
  if (user.role !== 'admin') {
    return res.status(403).send({ message: 'Access forbidden: Admin only.' });
  }
  next();
});

export default authMiddleware;