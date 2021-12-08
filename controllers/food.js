const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

const { food } = require("../models");

// router.get('/', function(req, res) {
//     // get all albums
//     Album.findAll()
//     .then(function(albumList) {
//         console.log('FOUND ALL ALBUMS', albumList);
//         // res.json({ albums: albumList });
//         res.render('albums/index1', { albums: albumList })
//     })
//     .catch(function(err) {
//         console.log('ERROR', err);
//         res.json({ message: 'Error occured, please try again....'});
//     });
// });

// router.get('/new', function(req, res) {
//     res.render('albums/new');
// });

// router.get('/albums/edit/:id', function(req, res) {
//     console.log('This is the ID', req.params.id);
//     let albumIndex = Number(req.params.id);
//     Album.findByPk(albumIndex)
//     .then(function(album) {
//         if (album) {
//             album = album.toJSON();
//             res.render('albums/edit', { album });
//         } else {
//             console.log('This album does not exist');
//             // render a 404 page
//             res.render('404', { message: 'Album does not exist'});
//         }
//     })
//     .catch(function(err) {
//         console.log('THERE IS AN ERROR', err);
//     })
// })

// router.get('/:id', function (req, res) {
//     console.log('params', req.params.id);
//     let albumIndex = Number(req.params.id);
//     console.log(albumIndex);
//     Album.findByPk(albumIndex)
//     .then(function(album) {
//         if (album) {
//             album = album.toJSON();
//             console.log('IS THIS AN ALBUM?', album);
//             res.render('albums/show', { album })
//         } else {
//             console.log('This album does not exist');
//             // render a 404 page
//             res.render('404', { message: 'Album does not exist'});
//         }
//     })
//     .catch(function(err) {
//         console.log('THERE IS AN ERROR', err);
//     })
// });

// router.post('/', function(req, res) {
//     console.log('SUBMITTED FORM', req.body);
//     Album.create({
//         title: req.body.title,
//         length: Number(req.body.length),
//         tracks: Number(req.body.tracks),
//         year: Number(req.body.year),
//     })
//     .then(function(newAlbum) {
//         console.log('NEW ALBUM', newAlbum.toJSON());
//         newAlbum = newAlbum.toJSON();
//         res.redirect(`albums/${newAlbum.id}`);
//     })
//     .catch(function(err) {
//         console.log('THERE IS AN ERROR', err);
//         res.render('404', { message: 'Album was not added, please try again...'});
//     })
// })

// //EDIT
// router.put('/:id', function(req, res) {
//     console.log('EDIT FORM DATA THAT WAS SUBMITTED', req.body);
//     console.log('HERE IS THE ID', req.params.id);
//     let albumIndex = Number(req.params.id);
//     Album.update({
//         title: req.body.title,
//         length: req.body.length,
//         tracks: req.body.tracks,
//         year: req.body.year,
//     }, {
//         where: { id: Number(req.params.id) }
//     })
//     .then(function(response) {
//         console.log('AFTER UPDATE', response);
//         res.redirect(`/albums/${albumIndex}`);
//     })
//     .catch(function(err) {
//         console.log('ERROR', err);
//         res.render('404', { message: 'Update was not successful, please try again...'});
//     })
// });

// DELETE
// router.delete('/:id', function(req, res) {
//     console.log('ID HERE', req.params.id);
//     let albumIndex = Number(req.params.id);
//     Album.destroy({
//         where: { id: albumIndex }
//     })
//     .then(function(response) {
//         console.log('AFTER DELETE', response);
//         res.redirect('/albums');
//     })
//     .catch(function(err) {
//         console.log('ERROR', err);
//     })
// });

module.exports = router;