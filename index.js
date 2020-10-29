const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Series = require('./server/api/series');
const Story = require('./server/api/story');
const Scene = require('./server/api/scene');
const Chapter = require('./server/api/chapter');
const Character = require('./server/api/character');
const Setting = require('./server/api/setting');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(cors());

app.use(Series);
app.use(Story);
app.use(Scene);
app.use(Chapter);
app.use(Character);
app.use(Setting);

app.get('/api/test', (req, res) => {
    res.end('API works');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT || 5010, () => {
    console.log('Storywriter is now live');
});