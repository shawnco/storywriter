const Series = require('./../models/series');
const Story = require('./../models/story');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const send = require('./send');

const list = (req, res, next) => {
    Series.findAll().then(series => {
        req.response = series;
        return next();
    });
}

const get = (req, res, next) => {
    const id = req.params.id;
    Series.findByPk(id).then(series => {
        req.response = {
            series: series
        };
        return next();
    });
}

const stories = (req, res, next) => {
    const id = req.params.id;
    const filter = {
        where: {
            series: id
        }
    };
    Story.findAll(filter).then(stories => {
        req.response.stories = stories;
        return next();
    });
}

const create = (req, res, next) => {
    const data = {
        title: _.get(req, 'body.title', ''),
        description: _.get(req, 'body.description', '')
    };
    Series.create(data).then(series => {
        req.response = series;
        return next();
    });
}

const update = (req, res, next) => {
    const id = req.params.id;
    Series.findByPk(id).then(series => {
        series.title = _.get(req, 'body.title', series.title);
        series.description = _.get(req, 'body.description', series.description);
        series.save().then(updated => {
            req.response = updated;
            return next();
        });
    });
}

const del = (req, res, next) => {
    const id = req.params.id;
    Series.findByPk(id).then(series => {
        series.destroy().then(deleted => {
            req.response = deleted;
            return next();
        });
    });
}

router.get('/api/series/list', list, send);
router.get('/api/series/:id', get, stories, send);
router.post('/api/series', create, send);
router.put('/api/series/:id', update, send);
router.delete('/api/series/:id', del, send);
module.exports = router;