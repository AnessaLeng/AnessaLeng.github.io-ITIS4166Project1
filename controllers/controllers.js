const model = require('../models/manga.js');

exports.index = (req, res) => {
    let collection = model.find();
    res.render('./manga/index', {collection});
};

exports.new = (req, res) => {
    res.render('./manga/new');
};

exports.create = (req, res) => {
    let manga = req.body;
    model.save(manga);
    res.redirect('/collection');
};

exports.show = (req, res, next) => {
    let id = req.params.id;
    let manga = model.findById(id);
    if (manga) {
        res.render('./manga/show', {manga});
    } else {
        let err = new Error('Cannot find manga with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.edit = (req, res, next) => {
    let id = req.params.id;
    let manga = model.findById(id);
    if (manga) {
        res.render('./manga/edit', {manga});
    } else {
        let err = new Error('Cannot find manga with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next) => {
    let id = req.params.id;
    let manga = req.body;

    if (model.updateById(id, manga)) {
        res.redirect('/collection/' + id);
    } else {
        let err = new Error('Cannot find manga with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    if (model.deleteById(id)) {
        res.redirect('/collection');
    } else {
        let err = new Error('Cannot find manga with id ' + id);
        err.status = 404;
        next(err);
    }
};