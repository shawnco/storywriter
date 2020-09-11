const Character = require('./../models/character');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const send = require('./send');

const list = (req, res, next) => {
    Character.findAll().then(character => {
        req.response = character;
        return next();
    });
}

const get = (req, res, next) => {
    const id = req.params.id;
    Character.findByPk(id).then(character => {
        req.response = character;
        return next();
    });
}

const create = (req, res, next) => {
    const data = {
        name: _.get(req, 'body.title', ''),
        description: _.get(req, 'body.description', ''),
        story: _.get(req, 'body.story', ''),
        series: _.get(req, 'body.series', '')
    };
    Character.create(data).then(character => {
        req.response = character;
        return next();
    });
}

const update = (req, res, next) => {
    const id = req.params.id;
    Character.findByPk(id).then(character => {
        character.description = _.get(req, 'body.description', character.description);
        character.name = _.get(req, 'body.name', character.name);
        character.story = _.get(req, 'body.story', character.story);
        character.series = _.get(req, 'body.series', character.series);
        character.save().then(updated => {
            req.response = updated;
            return next();
        });
    });
}

const del = (req, res, next) => {
    const id = req.params.id;
    Character.findByPk(id).then(character => {
        character.destroy().then(deleted => {
            req.response = deleted;
            return next();
        });
    });
}

router.get('/api/character/list', list, send);
router.get('/api/character/:id', get, send);
router.post('/api/character', create, send);
router.put('/api/character/:id', update, send);
router.delete('/api/character/:id', del, send);
module.exports = router;