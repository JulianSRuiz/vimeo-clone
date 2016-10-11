const express = require("express");
const session = require("express-session");
const {json} = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017";
const FacebookStrategy = require("passport-facebook").Strategy;
const config = require("./config.js");
const cors = require("cors");
const app = express();
const port = 4000;
const masterRoutes = require("./server/masterRoutes");


const webpack = require('webpack');
const webpackDevConfig = require('./webpack.config');
const compiler = webpack( webpackDevConfig );
app.use( require( 'webpack-hot-middleware' )( compiler, { log: console.log } ) );
app.use( require( 'webpack-dev-middleware' )( compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath,
    stats: { colors: true }
} ) );

//App Use....................................................

app.use(json());
app.use(cors({origin: "http://localhost:4000"}));

//app.use(session({secret: config.mySecrets.secret}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/dist/`));



//Facebook Authorization......................................

    passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.secret,
      callbackURL: config.facebook.cbURL
    }, function(token, refreshToken, profile, done) {
      return done(null, profile);
    }));

    app.get('/auth/facebook', passport.authenticate("facebook"));
    app.get('/auth/facebook/callback', passport.authenticate("facebook", {
      successRedirect: "/#/welcome",
      failureRedirect: "/login-error"
    }));

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });

    app.get('/', (req, res) => {
      res.send(req.user);
    });

//............................................................


// mongoose.connect(mongoUri);
// mongoose.connection.once("open", () => console.log(`Mongoose listening on ${mongoUri}`));

app.listen(port, () => console.log(`Listening on ${port}`));
