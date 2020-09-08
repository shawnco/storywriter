const Series = require('./../models/series');
const express = require('express');
const router = express.Router();
const _ = require('lodash');

const list = (req, res, next) => {
    Series.findAll().then(series => {
        req.response = series;
        return next();
    });
}

const get = (req, res, next) => {
    const id = req.params.id;
    Series.findByPk(id).then(series => {
        req.response = series;
        return next();
    });
}

const create = (req, res, next) => {
    const data = {
        title: _.get(req, 'body.title', ''),
        description: _.get(req, 'body.description', '')
    };
    Series.create(data).then(series => {
        req.reponse = series;
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

router.get('/api/series/list', list);
router.get('/api/series/:id', get);
router.post('/api/series', create);
router.put('/api/series/:id', update);
router.delete('/api/series/:id', del);