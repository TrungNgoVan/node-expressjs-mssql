'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

class EventData {
    getEvents = async () => {
        try {
            let pool = await sql.connect(config.sql);
            const sqlQueries = await utils.loadSqlQueries('events');
            const eventsList = await pool.request().query(sqlQueries.eventsList);
            return eventsList.recordset;
        } catch (error) {
            console.log(error.message);
        }
    }

    getEventById = async (id) => {
        try {
            // get a database connection
            let pool = await sql.connect(config.sql);
            // load the SQL queries
            const sqlQueries = await utils.loadSqlQueries('events');
            // execute the SQL query
            const event = await pool.request()
                // pass the SQL parameter value
                .input('eventId', sql.Int, id)
                // execute the SQL query
                .query(sqlQueries.eventById);
            return event.recordset;
        } catch (error) {
            console.log(error.message);
        }
    }

    createEvent = async (eventData) => {
        try {
            // get a database connection
            const pool = await sql.connect(config.sql);
            // load the SQL queries
            const sqlQueries = await utils.loadSqlQueries('events');
            // execute the SQL query
            const insertEvent = await pool.request()
                .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                .input('startDate', sql.Date, eventData.startDate)
                .input('endDate', sql.Date, eventData.endDate)
                .input('avenue', sql.NVarChar(200), eventData.avenue)
                .input('maxMembers', sql.Int, eventData.maxMembers)
                .query(sqlQueries.createEvent);
            // return the recordset object
            return insertEvent.recordset;
        }
        catch (error) {
            console.log(error.message);
        }
    }

    updateEvent = async (eventData) => {
        try {
            // get a database connection
            const pool = await sql.connect(config.sql);
            // load the SQL queries
            const sqlQueries = await utils.loadSqlQueries('events');
            // execute the SQL query
            const updateEvent = await pool.request()
                .input('eventId', sql.Int, eventData.eventId)
                .input('eventTitle', sql.NVarChar(100), eventData.eventTitle)
                .input('eventDescription', sql.NVarChar(1500), eventData.eventDescription)
                .input('startDate', sql.Date, eventData.startDate)
                .input('endDate', sql.Date, eventData.endDate)
                .input('avenue', sql.NVarChar(200), eventData.avenue)
                .input('maxMembers', sql.Int, eventData.maxMembers)
                .query(sqlQueries.updateEvent);
            // return the recordset object
            return updateEvent.recordset;
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new EventData();

