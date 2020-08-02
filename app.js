const express = require('express');
const userRouter = require('./routers/user');
const cors = require('cors');
const bodyParser = require("body-parser");
const port = process.env.PORT
require('./config/db');

const app = express()

/* CORS */
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})