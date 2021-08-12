module.exports.profile = function(req, res){
    return res.render('profile', {
        Profile: "Sam"
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

