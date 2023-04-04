'use strict';

const eventData = require('../data/events');

class EventController {
    async getEvents(req, res) {
        try {
            const events = await eventData.getEvents();
            res.send(events);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async getEventById(req, res) {
        try{
            const id = req.params.id;
            const event = await eventData.getEventById(id);
            res.send(event);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    async createEvent(req, res) {
        try {
            const event = req.body;
            const created = await eventData.createEvent(event);
            console.log("Created event: ", created, "successfully");
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async updateEvent(req, res) {
        try {
            const event = req.body;
            const updated = await eventData.updateEvent(event);
            console.log("Updated event: ", updated, "successfully");
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = new EventController();
