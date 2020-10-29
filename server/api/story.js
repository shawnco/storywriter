const Story = require('./../models/story');
const Scene = require('./../models/scene');
const Chapter = require('./../models/chapter');
const Character = require('./../models/character');
const Setting = require('./../models/setting');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const send = require('./send');

const list = (req, res, next) => {
    Story.findAll().then(story => {
        req.response = story;
        return next();
    });
}

const get = (req, res, next) => {
    const id = req.params.id;
    Story.findByPk(id).then(story => {
        req.response = story;
        return next();
    });
}

const scenes = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        where: {
            story: id
        }
    };
    Scene.findAll(filter).then(scenes => {
        req.response = scenes;
        return next();
    });
}

const chapters = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        where: {
            story: id
        }
    };
    Chapter.findAll(filter).then(chapters => {
        req.response = chapters;
        return next();
    });
}

const storyCharacters = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        where: {
            story: id
        }
    };
    Character.findAll(filter).then(characters => {
        req.response = characters;
        return next();
    });
}

const seriesCharacters = (req, res, next) => {
    const id = req.params.id;
    Story.findByPk(id).then(story => {
        const filter = {
            where: {
                series: story.series
            }
        };
        Character.findAll(filter).then(characters => {
            req.response = [...req.response, ...characters];
            return next();
        });
    });
}

const storySettings = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        where: {
            story: id
        }
    };
    Setting.findAll(filter).then(settings => {
        req.response = settings;
        return next();
    });
}

const seriesSettings = (req, res, next) => {
    const id = req.params.id;
    Story.findByPk(id).then(story => {
        const filter = {
            where: {
                series: story.series
            }
        };
        Setting.findAll(filter).then(settings => {
            req.response = [...req.response, ...settings];
            return next();
        });
    });
}

const create = (req, res, next) => {
    const data = {
        title: _.get(req, 'body.title', ''),
        description: _.get(req, 'body.description', ''),
        series: _.get(req, 'body.series', '')
    };
    Story.create(data).then(story => {
        req.response = story;
        return next();
    });
}

const update = (req, res, next) => {
    const id = req.params.id;
    Story.findByPk(id).then(story => {
        story.title = _.get(req, 'body.title', story.title);
        story.description = _.get(req, 'body.description', story.description);
        story.series = _.get(req, 'body.series', story.series);
        story.save().then(updated => {
            req.response = updated;
            return next();
        });
    });
}

const del = (req, res, next) => {
    const id = req.params.id;
    Story.findByPk(id).then(story => {
        story.destroy().then(deleted => {
            req.response = deleted;
            return next();
        });
    });
}

router.get('/api/story/list', list, send);
router.get('/api/story/:id/chapters', chapters, send);
router.get('/api/story/:id/characters', storyCharacters, seriesCharacters, send);
router.get('/api/story/:id/scenes', scenes, send);
router.get('/api/story/:id/settings', storySettings, seriesSettings, send);
router.get('/api/story/:id', get, send);
router.post('/api/story', create, send);
router.put('/api/story/:id', update, send);
router.delete('/api/story/:id', del, send);
module.exports = router;