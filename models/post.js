 const mongoose = require('mongoose');

 const postSchema = new mongoose.Schema({
     content: {
         type: String, 
         required: true
     },
     user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
     
    }

},{
    timestamps: true
});

const Posts = mongoose.model('Post', postSchema)
module.exports = Post;