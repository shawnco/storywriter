const Story = require('./../models/story');
const Scene = require('./../models/scene');
const Chapter = require('./../models/chapter');
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
        req.response = {
            story: story
        };
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
        req.response.scenes = scenes;
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
        req.response.chapters = chapters;
        return next();
    });
}

const characters = (req, res, next) => {
    const id = req.params.id;
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
router.get('/api/story/:id', get, scenes, chapters, send);
router.post('/api/story', create, send);
router.put('/api/story/:id', update, send);
router.delete('/api/story/:id', del, send);
module.exports = router;