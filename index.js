const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Series = require('./server/api/series');
const Story = require('./server/api/story');
const Scene = require('./server/api/scene');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(cors());

app.use(Series);
app.use(Story);
app.use(Scene);

app.get('/api/test', (req, res) => {
    res.end('API works');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log('App is now live');
});