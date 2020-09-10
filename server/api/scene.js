const Scene = require('./../models/scene');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const send = require('./send');

const list = (req, res, next) => {
    Scene.findAll().then(scene => {
        req.response = scene;
        return next();
    });
}

const get = (req, res, next) => {
    const id = req.params.id;
    Scene.findByPk(id).then(scene => {
        req.response = scene;
        return next();
    });
}

const create = (req, res, next) => {
    const data = {
        description: _.get(req, 'body.description', ''),
        content: _.get(req, 'body.content', ''),
        story: _.get(req, 'body.story', ''),
        position: _.get(req, 'body.position', ''),
        chapter: _.get(req, 'body.chapter', '')
    };
    Scene.create(data).then(scene => {
        req.response = scene;
        return next();
    });
}

const update = (req, res, next) => {
    const id = req.params.id;
    Scene.findByPk(id).then(scene => {
        scene.description = _.get(req, 'body.description', scene.description);
        scene.content = _.get(req, 'body.content', scene.content);
        scene.story = _.get(req, 'body.story', scene.story);
        scene.position = _.get(req, 'body.position', scene.position);
        scene.chapter = _.get(req, 'body.chapter', scene.chapter);
        scene.save().then(updated => {
            req.response = updated;
            return next();
        });
    });
}

const del = (req, res, next) => {
    const id = req.params.id;
    Scene.findByPk(id).then(scene => {
        scene.destroy().then(deleted => {
            req.response = deleted;
            return next();
        });
    });
}

router.get('/api/scene/list', list, send);
router.get('/api/scene/:id', get, send);
router.post('/api/scene', create, send);
router.put('/api/scene/:id', update, send);
router.delete('/api/scene/:id', del, send);
module.exports = router;