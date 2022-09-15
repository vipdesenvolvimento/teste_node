const express = require('express');
const consign = require('consign');




module.exports = () => {

	const app = express();

	consign({cwd: 'src'})
		.then('controller')
		.then('route')
		.into(app)

	return app;

}