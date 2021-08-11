module.exports.profile = function(req, res){
    return res.render('profile', {
        Profile: "Sam"
    });
}