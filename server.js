require('dotenv').config();

const app = require('./src/config/express')();
app.listen(process.env.port, () =>{
	console.log("Server is Ready!");
});
