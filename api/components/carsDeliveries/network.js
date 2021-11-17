const express = require('express');


const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
 router.get('/:id', get);
router.post('/', upsert);
router.put('/update', update);
router.get('/delete/:id', deleteDelivery);

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then((order) => {
            response.success(req, res, order, 200);
        })
        .catch(next);
}
function deleteDelivery(req, res, next) {
    Controller.deleteDelivery(req.params.id)
        .then((order) => {
            response.success(req, res, order, 200);
        })
        .catch(next);
}

function upsert(req, res, next) {
    Controller.upsert(req.body)
        .then((order) => {
            response.success(req, res, order, 201);
        })
        .catch(next);
}
function update(req, res, next) {
    Controller.update(req.body)
        .then((order) => {
            response.success(req, res, order, 201);
        })
        .catch(next);
}





module.exports = router;