const Post = require('../models/post')

module.exports.home = function(req, res){
    console.log(req.cookies);


    // Post.find({}, function(err, posts){
    //     return res.render('home', {
    //     title: " Convvey | Home", 
    //     posts: posts
    //     });

    // });

    // populate user of each post
    Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home', {
            title: " Convvey | Home", 
            posts: posts
         });
    })
}

