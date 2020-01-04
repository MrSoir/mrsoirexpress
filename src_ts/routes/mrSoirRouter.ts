const pathPckg = require('path');
const express = require('express');
import { Request, Response } from 'express';
const router  = express.Router();

// router.get('/getNilaState', (req: Request, res: Response)=>{
//     res.status(200).send({
//         status: 'Hallo Nila!!!'
//     });
// });

const mrSoirFeBuildDir = pathPckg.join(__dirname, '../../react_build');
const mrSoirFeIndexHtml = pathPckg.join(mrSoirFeBuildDir, 'index.html');

router.use(express.static(mrSoirFeBuildDir));

router.get('/*', (req: Request,res: Response) =>{
    res.sendFile(mrSoirFeIndexHtml);
});


module.exports = router;