'use strict';

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/events/:id', eventController.getEventById);
router.get('/events', eventController.getEvents);
router.post('/events', eventController.createEvent);

module.exports = {
    router
}
