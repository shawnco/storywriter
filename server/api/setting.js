const Setting = require('./../models/setting');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const send = require('./send');

const list = (req, res, next) => {
    Setting.findAll().then(setting => {
        req.response = setting;
        return next();
    });
}

const get = (req, res, next) => {
    const id = req.params.id;
    Setting.findByPk(id).then(setting => {
        req.response = setting;
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
    Setting.create(data).then(setting => {
        req.response = setting;
        return next();
    });
}

const update = (req, res, next) => {
    const id = req.params.id;
    Setting.findByPk(id).then(setting => {
        setting.description = _.get(req, 'body.description', setting.description);
        setting.name = _.get(req, 'body.name', setting.name);
        setting.story = _.get(req, 'body.story', setting.story);
        setting.series = _.get(req, 'body.series', setting.series);
        setting.save().then(updated => {
            req.response = updated;
            return next();
        });
    });
}

const del = (req, res, next) => {
    const id = req.params.id;
    Setting.findByPk(id).then(setting => {
        setting.destroy().then(deleted => {
            req.response = deleted;
            return next();
        });
    });
}

router.get('/api/setting/list', list, send);
router.get('/api/setting/:id', get, send);
router.post('/api/setting', create, send);
router.put('/api/setting/:id', update, send);
router.delete('/api/setting/:id', del, send);
module.exports = router;