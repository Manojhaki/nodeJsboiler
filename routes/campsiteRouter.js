const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the campsites to you');
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });


campsiteRouter.route('/:campsiteId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end(`Will send all the campsites:${req.params.campsiteId} to you`);
    })
    .post((req, res) => {
        res.end(`Will add the campsite with the Id: ${req.params.campsiteId}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /campsites  for name: ${req.body.name} & description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting all campsites with ID: ${req.params.campsiteId}`);
    });

module.exports = campsiteRouter;