'use strict';

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/events/:id', eventController.getEventById);
router.get('/events', eventController.getEvents);
router.post('/events', eventController.createEvent);
router.put('/events', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEvent);

module.exports = {
    router
}
