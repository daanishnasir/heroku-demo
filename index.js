require('dotenv').config()


const   express = require('express')
 				, cors = require('cors')
 				, bodyParser = require('body-parser')
 				, app = express()
//				, serverConfig = require("./serverConfig")
//				, session = require("express-session")
// app.use(session(serverConfig.session) );
app.use(cors())
app.use(bodyParser.json())
app.use("/", express.static(__dirname + 'index.html'));


app.listen(process.env.PORT, () => {
    console.log(`Listening`);
});
