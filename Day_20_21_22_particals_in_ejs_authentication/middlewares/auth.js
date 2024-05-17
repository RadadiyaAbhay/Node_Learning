const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const adminModel = require('../models/admin.model');

passport.use(new LocalStrategy({
    usernameField: 'email', 
    passwordField: 'password'
    // the
},
    function(email, password, done) {
      adminModel.findOne({ email: email }).then((admin) =>{

        if(!admin) {
            return done(null, false);
        }
        if(admin.password === password){
            return done(null, admin);
        }else{
            return done(null, false);
        }


      }).catch((err) =>{
        return done(err);
      });
    }
  ));

  