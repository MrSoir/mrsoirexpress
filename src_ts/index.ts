const pathPckg = require('path');
const express = require("express");
import { Request, Response } from 'express';
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const app = express();

const PORT : string = process.env.PORT || '3000';

const ENV = process.env.NODE_ENV || 'development';

//---------------------Middleware---------------------
// app.use(morgan("common"));
// app.use(cors({
//     origin: [`http://localhost:${REACT_PORT}`],
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));
app.use(compression());
//---------------------Middleware---------------------



//---------------------Routing---------------------
const mrSoirRouter = require('./routes/mrSoirRouter');
app.use(mrSoirRouter);

// app.get('/getStatus', function(req: Request, res: Response) {
//     res.json({
//         status: "My API is alive!"
//     });
// });
//---------------------Routing---------------------


app.listen(PORT, function() {
    console.log(`MrSoir-backend is running on port ${PORT} in ${ENV} mode`);
});


module.exports = app;