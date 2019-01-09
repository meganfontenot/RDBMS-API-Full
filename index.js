//Requiring 
const express = require('express');
const server = express();
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);
const PORT = process.env.PORT || 3000;

server.use(express.json());

//GET'n it done
server.get('/cohorts', (req, res) => {
});
server.get('/cohorts/:id', (req, res) => {
});
server.get('/cohorts/:id/students', (req, res) => {
});
server.get('/students', (req, res) => {
});
server.get('/students/:id', (req, res) => {
});

//POST'n it soon
server.post('/cohorts', (req, res) => {
    const cohort = req.body;
    db('cohorts').insert(cohort)
        .then()
        .catch(err => {
            res.status(500).json({message: "Can not add student"})
        })
});

server.post('/students', (req, res) => {
    const student = req.body;
    db('students').insert(student)
        .then()
        .catch(err => {
            res.status(500).json({message: "Can not add student"})
        })
});


//PUT'n it together
server.put('/cohorts/:id', (req, res) => {
});
server.put('/students/:id', (req, res) => {
});


//DELETE'n it not
server.delete('/cohorts/:id', (req, res) => {
});
server.delete('/students/:id', (req, res) => {
});


//SERVE('n)R it hot
server.listen(PORT, () => {
    console.log(`Your server is listening on ${PORT}`)
});