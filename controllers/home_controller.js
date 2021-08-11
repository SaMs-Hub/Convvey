module.exports.home = function(req, res){
    return res.end('<H1> Express is running</H1>')
}
module.exports.profile = function(req, res){
    return res.end("<h1> This is the Profile Page</h1>")
}
