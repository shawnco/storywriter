const Chapter = require('./../models/chapter');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const send = require('./send');

const list = (req, res, next) => {
    Chapter.findAll().then(chapter => {
        req.response = chapter;
        return next();
    });
}

const get = (req, res, next) => {
    const id = req.params.id;
    Chapter.findByPk(id).then(chapter => {
        req.response = chapter;
        return next();
    });
}

const create = (req, res, next) => {
    const data = {
        title: _.get(req, 'body.title', ''),
        description: _.get(req, 'body.description', ''),
        story: _.get(req, 'body.story', ''),
        position: _.get(req, 'body.position', '')
    };
    Chapter.create(data).then(chapter => {
        req.response = chapter;
        return next();
    });
}

const update = (req, res, next) => {
    const id = req.params.id;
    Chapter.findByPk(id).then(chapter => {
        chapter.description = _.get(req, 'body.description', chapter.description);
        chapter.title = _.get(req, 'body.title', chapter.title);
        chapter.story = _.get(req, 'body.story', chapter.story);
        chapter.position = _.get(req, 'body.position', chapter.position);
        chapter.save().then(updated => {
            req.response = updated;
            return next();
        });
    });
}

const del = (req, res, next) => {
    const id = req.params.id;
    Chapter.findByPk(id).then(chapter => {
        chapter.destroy().then(deleted => {
            req.response = deleted;
            return next();
        });
    });
}

router.get('/api/chapter/list', list, send);
router.get('/api/chapter/:id', get, send);
router.post('/api/chapter', create, send);
router.put('/api/chapter/:id', update, send);
router.delete('/api/chapter/:id', del, send);
module.exports = router;