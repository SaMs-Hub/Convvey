const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//Creating an authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password,done){

        // find user and establish identity
        User.findOne({email: email}, function(err, user){
            if (err){
                console.log("Error in finding user --> Passport")
                return done(err);
            }

            // if user not found
            if (!user || user.password != password){
                console.log("Invalid Username/Password");
                return done(null, false);
            }

            return done(null, user);
         });
    }

));


// serializing the user to decide which key is to be kept in cookies
passport.serializeUser(function(user,done){
    done(null,user.id);

});


//desializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log("Error in finding user --> Passport");
            return done(err);
        }
    });
});

