const User = require('../models/user')

module.exports.profile = function(req, res){
    return res.render('profile', {
        title: "Sam"
    });
}

//render sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Convvey | Sign Up"
    })
}

// render signin page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: 'Convvey | Sign In'
    })
}

//get signup data
module.exports.create = function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('Error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('Error in creating user while signing up'); return}
                
                return res.redirect('/users/sign-in');
            })
        } else{
            return res.redirect('back');
        }
    })
}

//get sigin data
module.exports.createSession = function(req, res){
    //todo
}
