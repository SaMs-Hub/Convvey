 const fs = require('fs');
 const rfs = require('rotating-file-stream');
 const path = require('path');


 const logDirectory = path.join(__dirname, '../production_logs');
 fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

 const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
 });



const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: 'something',
    db: 'convvey_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'syedsamer456@gmail.com',
            pass: '#12'
        }
    },
    google_client_id: "###290-t03qcidt94jq9l11fjjr041ql1be08k6.apps.googleusercontent.com",
    google_client_secret: "###ypvaIhsdk6MHS7YNn5ot",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'convvey',
    morgan: {
        mode: 'dev',
        options: {stream: accessLogStream}
    }
}


const production =  {
    name: 'production',
    asset_path: process.env.CONVVEY_ASSET_PATH,
    session_cookie_key: process.env.CONVVEY_SESSION_COOKIE_KEY,
    db: process.env.CONVVEY_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.CONVVEY_GMAIL_USERNAME,
            pass: process.env.CONVVEY_GMAIL_PASSWORD
        }
    },
    google_client_id: process.env.CONVVEY_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.CONVVEY_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.CONVVEY_GOOGLE_CALLBACK_RURL,
    jwt_secret: process.env.CONVVEY_JWT_SECRET,
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
    }
}



module.exports = eval(process.env.CONVVEY_ENVIRONMENT) == undefined ? development : eval(process.env.CONVVEY_ENVIRONMENT);
