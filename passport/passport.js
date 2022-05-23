const passport = require('passport');
const User = require('../models/User');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
// registreren en inloggen
passport.use(User.createStrategy());

// voor sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());