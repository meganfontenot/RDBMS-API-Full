//Requiring 
const express = require ('express');
const server = express();
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);
const PORT = process.env.PORT || 3000;

