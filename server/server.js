// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const corsOptions = require('./config/corsOptions');

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(201).send('Hello World');
})

// app.get('/api/users', (req, res) => {
//     const {
//         query: {filter, value}
//     } = request;
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})