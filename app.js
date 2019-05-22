const express = require('express');
const path = require('path');

const app = express();

app.use('static', express.static('static'));

app.post('/get-data', (req, res) => {
	res.sendFile(__dirname + '/static/data.json');
});

app.listen(8585);
