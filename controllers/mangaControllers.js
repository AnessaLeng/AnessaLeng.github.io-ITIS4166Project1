const model = require('../models/manga');
const _ = require('lodash');

exports.search = (req, res, next) => {  
    let query = req.query.search;
    let collection = model.find();
    let sortedCollection = collection.filter(
        manga => 
        manga.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        manga.details.toLowerCase().includes(query.toLowerCase().trim())
    );
    sortedCollection = _.filter(sortedCollection, { active: true })
    sortedCollection = _.sortBy(sortedCollection, 'price');
        
    if (sortedCollection) {
        res.render('./search', { sortedCollection });
    } else {
        let err = new Error('Internal Server Error');
        err.status = 500;
        next(err);
    }
};

exports.index = (req, res, next) => {
    let collection = model.find();
    let activeManga = _.filter(collection, { active: true });
    let sortedCollection = _.sortBy(activeManga, 'price');

    if (sortedCollection) {
        res.render('./manga/items', { sortedCollection });
    } else {
        let err = new Error('Internal Server Error');
        err.status = 500;
        next(err);
    }
};

exports.all = (req, res, next) => {
    let collection = model.find();
    let sortedCollection = _.sortBy(collection, 'price');
    if (sortedCollection) {
        res.render('./manga/items', { sortedCollection });
    } else {
        let err = new Error('Internal Server Error');
        err.status = 500;
        next(err);
    }
}

exports.new = (req, res) => {
    res.render('./manga/new');
};

exports.create = (req, res) => {
    let manga = req.body;
    manga.image = '/images/' + req.file.filename; 
    model.save(manga);
    res.redirect('/collection');
};

exports.show = (req, res, next) => {
    let id = req.params.id;
    let manga = model.findById(id);
    if (manga) {
        res.render('./manga/item', {manga});
    } else {
        let err = new Error('Cannot find manga with ID ' + id + '.');
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
        let err = new Error('Cannot find manga with ID ' + id + '. Unable to edit.');
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next) => {
    let id = req.params.id;
    let manga = req.body;

    if (req.file) {
        manga.image = '/images/' + req.file.filename;
    } else {
        manga.image = model.findById(id).image;
    }

    if (model.updateById(id, manga)) {
        res.redirect('/collection/' + id);
    } else {
        let err = new Error('Cannot find manga with ID ' + id + '. Unable to update.');
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    if (model.deleteById(id)) {
        res.redirect('/collection');
    } else {
        let err = new Error('Cannot find manga with ID ' + id + '. Unable to delete.');
        err.status = 404;
        next(err);
    }
};